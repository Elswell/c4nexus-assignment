import { FC } from "react";
import { NavbarData } from "../data/NavbarData";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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
