import { FC } from "react";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

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
      <header className="sticky top-0 bg-white py-4 border-b-2 border-[#333333] z-50">
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
        </nav>
      </header>
    </>
  );
};

export default Header;
