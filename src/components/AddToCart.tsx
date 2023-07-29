import { Loader2, ShoppingCart } from "lucide-react";
import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface AddToCartProps {}

const AddToCart: FC<AddToCartProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShoppingCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Product added to the cart!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <button className="absolute top-4 right-4 bg-white w-10 h-10 p-2 rounded-lg hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <ShoppingCart onClick={handleShoppingCart} />
        )}
      </button>
      <Toaster />
    </>
  );
};

export default AddToCart;
