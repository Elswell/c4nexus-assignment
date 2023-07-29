import { X } from "lucide-react";
import { FC } from "react";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
  callbackToggle: () => void;
  data: { label: string; href: string }[];
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ callbackToggle, data }) => {
  return (
    <div className="fixed w-full h-[30vh] dark:bg-slate-900 bg-white border-b-2 border-b-charcoal dark:border-b-gray-300 text-charcoal z-50">
      <X
        onClick={callbackToggle}
        className="absolute top-4 right-8 h-8 w-8 dark:text-gray-300"
      />
      <div className="flex flex-col space-y-6 items-center justify-center h-full">
        {data.map((data, i) => (
          <Typography
            variant="p"
            key={`navbarLinkMobile${i}`}
            className="text-charcoal dark:text-gray-300"
          >
            <Link to={data.href}>{data.label}</Link>
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
