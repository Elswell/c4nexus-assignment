import { FC, useEffect, useState } from "react";
import { IProductData, ProductData } from "../data/ProductData";
import { Typography } from "./Typography";
import { cn } from "../utils/cn";
import { generateRatingStars } from "../utils/generateRatingStars";
import { useSearchParams } from "react-router-dom";

interface ProductsProps {}

const ProductCard: FC<{ product: IProductData }> = ({ product }) => {
  const { description, name, price, ratings, discounted_price } = product;

  return (
    <div className="w-full p-2 flex flex-col">
      <div className="h-[350px] bg-slate-400" />
      <span className="flex justify-between">
        <Typography variant="p">{name}</Typography>
        <Typography variant="p">
          {generateRatingStars(ratings.stars)}
        </Typography>
      </span>
      <Typography variant="span" className="truncate text-slate-500">
        {description}
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
  );
};

const Products: FC<ProductsProps> = () => {
  const [searchParams] = useSearchParams();
  const colorsQuery = searchParams.get("color");
  const priceQueryMin = Number(searchParams.get("priceMin"));
  const priceQueryMax = Number(searchParams.get("priceMax"));
  const priceSort = searchParams.get("priceSort");
  const alphabeticalSort = searchParams.get("alphabeticalSort");

  // Filtering Logic

  const [products, setProducts] = useState(ProductData);

  useEffect(() => {
    const filteredProducts = ProductData.filter((product) => {
      const colorFilter = colorsQuery
        ? colorsQuery.includes(product.color)
        : ProductData;
      const priceFilter =
        product.price >= priceQueryMin && product.price <= priceQueryMax;

      return colorFilter && priceFilter;
    });

    if (priceSort === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (alphabeticalSort === "asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (alphabeticalSort === "desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(filteredProducts);
  }, [alphabeticalSort, colorsQuery, priceQueryMax, priceQueryMin, priceSort]);

  // Load More Logic

  const initialProductCount = 12;
  const productsPerLoad = 4;
  const [visibleProducts, setVisibleProducts] = useState(initialProductCount);

  const handleLoadMore = () => {
    setVisibleProducts((prevCount) => prevCount + productsPerLoad);
  };

  return (
    <div className="w-3/4">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="mt-4 flex items-center justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded "
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
