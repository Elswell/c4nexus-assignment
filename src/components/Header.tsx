import { FC } from "react";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";

export const NavbarData: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/",
  },
  {
    label: "Help",
    href: "/",
  },
  {
    label: "Cart",
    href: "/",
  },
];

const Header: FC = () => {
  return (
    <>
      <header className="sticky top-0 bg-white dark:bg-slate-900 dark:border-gray-300 py-4 border-b-2 border-charcoal z-50">
        <nav className="flex items-center justify-between container">
          <div>
            <Typography variant="h4">Logo</Typography>
          </div>
          <div className="md:flex space-x-4 hidden">
            {NavbarData.map((data, i) => (
              <Typography variant="p" key={`navbarLink${i}`}>
                <Link to={data.href}>{data.label}</Link>
              </Typography>
            ))}
          </div>
          <Switcher />
        </nav>
      </header>
    </>
  );
};

export default Header;
