# Tech Stack

I decided to use **Vite** as the framework of choice, as the project is very minimal and there is no need for frameworks like NextJS.
I love using **TailwindCSS**, so I went with it for stlying.

## JavaScript libraries used

1. shadcn/ui:

- Used their slider and dialog components for building part of the filter UI.

2. lucide-react:

- My go to choice for an icon library

3. react-hot-toast:

- Used for the add to cart alert

4. valtio:

- Very lightweight management library. I used it to store the filter params from all filter components, and execute the logic in a single file.

5. immer:

- Allows me to update the filter states in a more convenient and immutable way. A draft copy of the state is created allowing me to make mutable changes.

6. react-toggle-dark-mode:

- Dark/Light mode component

## UI/UX

I decided to go with a very minimalistic design approach, using slate and zinc colors from tailwind and a custom charcoal color.

## Filtering & Sorting Logic

With the help of **proxy** from the valtio package, I created a store where I set all the filters that are selected from the user. I also decided to set a default value to the category filter instead of initially displaying all products.

```ts
import { proxy } from "valtio";

interface StoreProps {
  results: number;
  category: string | undefined;
  colors: string[];
  price: { min: number[], max: number[] };
  priceSort: string;
  alphabeticalSort: string;
}

export const store =
  proxy <
  StoreProps >
  {
    results: 0,
    category: "kitchen-dining",
    colors: [],
    price: { min: [0], max: [100] },
    alphabeticalSort: "",
    priceSort: "",
  };
```

I am setting the filter states for everything this way except the colors where a bit more logic is needed, example:

```ts
import { store } from "../store/filter";

const CategoryFilter: FC = () => {
  // ...
  return (
    <div className="...">
      {CategoryData.map((data, i) => (
        <div key={`categoryTab${i}`} className="...">
          <button
            onClick={() => (store.category = data.param)}
            // When the button is clicked the state in the store is updated immediately
            className="..."
          >
            {data.label}
          </button>
        </div>
      ))}
    </div>
    // ...
  );
};
```

For modifying the colors using the valtio store I had some issues, at first I was using an useState to store the colors in an array of strings, and then later join them with "," to add them to the searchParams.
Selecting and adding a color to the params was fine, but if I wanted to remove a color by unselecting there was some weird behavior, as where the last selected color wasn't getting removed but only the color next to last. After finding the immer package I used it to modify the colors state, example:

```ts
import { store } from "../store/filter";
import { produce } from "immer";

const ProductFilter: FC = () => {
  // ...
  const handleColorFilter = (color: string) => {
    if (store.colors?.includes(color)) {
      store.colors = produce(store.colors, (draft) => {
        const index = draft.indexOf(color);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
    } else {
      store.colors = produce(store.colors, (draft) => {
        draft.push(color);
      });
    }
  };

   return (
     // ...
   )
}
```

I apply the searchParams in the Home.tsx file, the parent of all filter components.
With the use of the hook by valtio **useSnapshot**, where I provide the store and destructure the states needed, I can then apply the searchParams in an useEffect. I had trouble with searchParam keys being added with no value: "/?color=". Knowing that only priceMin and priceMax have initial values 0 and 100, I decided to make the rest of the params optional and check if they are defined and add them to an object that is later spread in the setSearchParams()

```ts
const Home: FC<HomeProps> = () => {
  const { category, price, priceSort, alphabeticalSort, colors } =
    useSnapshot(store);
  const [searchParams, setSearchParams] = useSearchParams();

  // Apply Search Params Logic
  useEffect(() => {
    const filterParams: {
      color?: string;
      priceSort?: string;
      alphabeticalSort?: string;
      priceMin: string;
      priceMax: string;
      category?: string;
    } = {
      priceMin: String(price.min[0]),
      priceMax: String(price.max[0]),
    };

    if (colors && colors.length > 0) {
      filterParams.color = colors.join(",");
    }

    if (priceSort) {
      filterParams.priceSort = priceSort;
    }

    if (alphabeticalSort) {
      filterParams.alphabeticalSort = alphabeticalSort;
    }

    if (category) {
      filterParams.category = category;
    }

    setSearchParams({
      ...filterParams,
    });
  }, [
    // ...
  ]);

   return (
      // ...
   )
}
```

The actual filtering of products with the sample data from "/data/ProductData.tsx" is done using javascript methods: filter(), sort() and includes(). The price sorting turned out a bit tricky, because I didn't consider the discounted price initially, so I am checking if a discounted price exists and use that to sort, instead of the price field.

```ts
const Products: FC<ProductProps> = () => {
  const [searchParams] = useSearchParams();

  const colorsQuery = searchParams.get("color");
  // I get all the params here using searchParams.get()

  const [products, setProducts] = useState(ProductData);

  useEffect(
    () => {
      const filteredProducts = ProductData.filter((product) => {
        const colorFilter = colorsQuery
          ? colorsQuery.includes(product.color)
          : ProductData;

        const priceFilter =
          product.price >= priceQueryMin && product.price <= priceQueryMax;

        const categoryFilter = product.category === categoryQuery;

        return colorFilter && priceFilter && categoryFilter;
      });

      if (priceSort === "asc") {
        filteredProducts.sort((a, b) => {
          const priceA =
            a.discounted_price !== undefined ? a.discounted_price : a.price;
          const priceB =
            b.discounted_price !== undefined ? b.discounted_price : b.price;
          return priceA - priceB;
        });
      } else if (priceSort === "desc") {
        filteredProducts.sort((a, b) => {
          const priceA =
            a.discounted_price !== undefined ? a.discounted_price : a.price;
          const priceB =
            b.discounted_price !== undefined ? b.discounted_price : b.price;
          return priceB - priceA;
        });
      }

      if (alphabeticalSort === "asc") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (alphabeticalSort === "desc") {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      store.results = filteredProducts.length;

      setProducts(filteredProducts);
    },
    [
      // ...
    ]
  );

  return (
   // ...
  )
};
```

I had to add a debounce for the function that handles the price slider. When you moved the slider in fast motions for a few seconds it started to freeze and params were not being updated. This fixed the issue:

```ts
  // Handle Price Params
  const handlePriceFilter = useCallback(
    debounce(({ min, max }: { min: number[]; max: number[] }) => {
      store.price = { min: min, max: max };
    }, 10),
    []
  );
```

