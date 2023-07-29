import { FC, useState } from "react";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";
import { Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

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
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 bg-white dark:bg-slate-900 dark:border-gray-300 py-4 border-b-2 border-charcoal z-50">
        <nav className="flex items-center justify-between container">
          <Link to="/">
            <Typography variant="h4">GREEN.</Typography>
          </Link>
          <div className="md:flex space-x-6 hidden">
            {NavbarData.map((data, i) => (
              <Typography variant="p" key={`navbarLink${i}`}>
                <Link to={data.href}>{data.label}</Link>
              </Typography>
            ))}
          </div>
          <div className="flex space-x-2 items-center">
            <Switcher />
            <Menu
              className="h-8 w-8 md:hidden"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </nav>
      </header>
      {toggle ? (
        <HamburgerMenu
          data={NavbarData}
          callbackToggle={() => setToggle(false)}
        />
      ) : null}
    </>
  );
};

export default Header;
