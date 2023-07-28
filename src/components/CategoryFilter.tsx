import { FC } from "react";
import { CategoryData } from "../data/FilterData";
import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { Typography } from "./Typography";
import { ProductData } from "../data/ProductData";

const CategoryFilter: FC = () => {
  const [searchParams, setCategory] = useSearchParams("kitchen-dining");

  const CategoriesEnum: { [key: string]: string } = {
    "kitchen-dining": "Kitchen & Dining",
    "home-decor": "Home Decor",
    cleaning: "Cleaning",
    diy: "DIY",
  };
  const currentCategory = String(searchParams.get("category"));
  const currentProductsLength = ProductData.filter(
    (product) => product.category === currentCategory
  ).length;

  const categoryName = CategoriesEnum[currentCategory];

  const handleCategoryFilter = (tab: string) => {
    setCategory((prevParams) => ({
      ...prevParams,
      category: tab,
    }));
  };

  return (
    <>
      <div className="bg-white w-full mt-8 py-2 flex justify-between divide-x divide-[#333333] border border-[#333333]">
        {CategoryData.map((data, i) => (
          <div key={`categoryTab${i}`} className="justify-center w-full flex">
            <button
              onClick={() => handleCategoryFilter(data.param)}
              className={cn(
                currentCategory === data.param
                  ? "text-[#333333] font-semibold"
                  : "text-[#5e7783]",
                " w-full"
              )}
            >
              {data.label}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full mt-4">
        <Typography variant="h4" className="text-[#333333] text-center">
          Browse {currentProductsLength} products in {categoryName}
        </Typography>
      </div>
    </>
  );
};

export default CategoryFilter;
