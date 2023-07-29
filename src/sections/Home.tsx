import { FC, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductsFilter from "../components/ProductsFilter";
import Products from "../components/Products";
import ProductsSort from "../components/ProductsSort";
import { useSnapshot } from "valtio";
import { store } from "../store/filter";
import { useSearchParams } from "react-router-dom";
import MobileFilter from "../components/MobileFilter";

interface HomeProps {}

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
    category,
    setSearchParams,
    searchParams,
    alphabeticalSort,
    price.min,
    price.max,
    priceSort,
    colors,
  ]);

  return (
    <section className="container flex self-start justify-start flex-col min-h-screen">
      <CategoryFilter />
      <div className="flex mt-16">
        <ProductsSort />
        <MobileFilter />
      </div>
      <div className="flex my-8 relative ">
        <ProductsFilter />
        <Products />
      </div>
    </section>
  );
};

export default Home;
