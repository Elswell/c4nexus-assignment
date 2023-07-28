import { FC } from "react";
import { CategoryData } from "../data/FilterData";
import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/cn";

interface CategoryFilterProps {}

const CategoryFilter: FC<CategoryFilterProps> = () => {
  const [searchParams, setCategory] = useSearchParams("kitchen-dining");

  const currentCategory = searchParams.get("category");

  const handleCategoryFilter = (tab: string) => {
    setCategory((prevParams) => ({
      ...prevParams,
      category: tab,
    }));
  };

  return (
    <div className="w-full mt-8 py-2 flex justify-between divide-x-[1px] divide-[#112432] border-[1px] border-[#112432]">
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
  );
};

export default CategoryFilter;
