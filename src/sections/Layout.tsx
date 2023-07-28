import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <section className="flex-grow">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
