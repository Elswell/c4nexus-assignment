import { FC, useEffect, useState } from "react";
import { IProductData, ProductData } from "../data/ProductData";
import { Typography } from "./Typography";
import { cn } from "../utils/cn";
import { generateRatingStars } from "../utils/generateRatingStars";
import { useSearchParams } from "react-router-dom";
import { store } from "../store/filter";

interface ProductsProps {}

const ProductCard: FC<{ product: IProductData }> = ({ product }) => {
  const { description, name, price, ratings, discounted_price, color, image } =
    product;

  return (
    <div className="w-full p-2 flex flex-col max-w-[250px] justify-center min-h-[550px]">
      <img src={image} width={250} height={350} />
      <div className="justify-between flex flex-col flex-grow">
        <span className="flex flex-col space-y-1">
          <Typography variant="p">
            {generateRatingStars(ratings.stars)} ({ratings.count})
          </Typography>
          <Typography variant="p">{name}</Typography>
          <Typography variant="span" className="truncate text-slate-500 ">
            {description}
          </Typography>
        </span>
        <Typography variant="span" className="text-slate-500 font-semibold">
          Color: {color}
        </Typography>
        <span className="flex flex-row space-x-2">
          {discounted_price && (
            <Typography variant="h4" className="text-[#333333]">
              ${discounted_price}
            </Typography>
          )}
          <Typography
            variant={discounted_price ? "p" : "h4"}
            className={cn(
              discounted_price &&
                "line-through decoration-red-500 decoration-2 text-opacity-60",
              "text-[#333333]"
            )}
          >
            ${price}
          </Typography>
        </span>
      </div>
    </div>
  );
};

const Products: FC<ProductsProps> = () => {
  const [searchParams] = useSearchParams();
  const colorsQuery = searchParams.get("color");
  const priceQueryMin = Number(searchParams.get("priceMin"));
  const priceQueryMax = Number(searchParams.get("priceMax"));
  const priceSort = searchParams.get("priceSort");
  const alphabeticalSort = searchParams.get("alphabeticalSort");
  const categoryQuery = searchParams.get("category");

  // Filtering Logic

  const [products, setProducts] = useState(ProductData);

  useEffect(() => {
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
  }, [
    alphabeticalSort,
    categoryQuery,
    colorsQuery,
    priceQueryMax,
    priceQueryMin,
    priceSort,
  ]);

  // Load More Logic

  const initialProductCount = 12;
  const productsPerLoad = 4;
  const [visibleProducts, setVisibleProducts] = useState(initialProductCount);

  const handleLoadMore = () => {
    setVisibleProducts((prevCount) => prevCount + productsPerLoad);
  };

  return (
    <div className="w-full md:w-3/4">
      <div className="place-items-center sm:place-items-start grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 ">
        {products.slice(0, visibleProducts).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="mt-4 flex items-center justify-center">
          <button
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-900 transition-colors text-white rounded "
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
