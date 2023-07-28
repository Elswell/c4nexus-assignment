import { FC } from "react";
// import CategoryFilter from "../components/CategoryFilter";
import ProductsFilter from "../components/ProductsFilter";
import Products from "../components/Products";
import ProductsSort from "../components/ProductsSort";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <section className="container flex self-start justify-start flex-col">
      {/* <CategoryFilter /> */}
      <div className="flex mt-16">
        <ProductsSort />
      </div>
      <div className="flex my-8">
        <ProductsFilter />
        <Products />
      </div>
    </section>
  );
};

export default Home;
