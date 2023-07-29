import { FC } from "react";
import { cn } from "../utils/cn";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const FooterData: {
  title?: string;
  list: { label: string; href: string }[];
}[] = [
  {
    title: "SHOP",
    list: [
      {
        label: "Kitchen & Dining",
        href: "/",
      },
      {
        label: "Home Decor",
        href: "/",
      },
      {
        label: "Cleaning",
        href: "/",
      },
      {
        label: "DIY",
        href: "/",
      },
    ],
  },
  {
    title: "SERVICES",
    list: [
      {
        label: "Return & Exchange",
        href: "/",
      },
      {
        label: "Shippinbg Info",
        href: "/",
      },
      {
        label: "Order Tracking",
        href: "/",
      },
      {
        label: "Contact Us",
        href: "/",
      },
    ],
  },
  {
    title: "LEGAL",
    list: [
      {
        label: "Terms of Use",
        href: "/",
      },
      {
        label: "Legal Notices",
        href: "/",
      },
      {
        label: "Privacy Policy",
        href: "/",
      },
      {
        label: "Store Locations",
        href: "/",
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <>
      <footer className="bg-white dark:bg-slate-900 h-full dark:border-t-gray-300 border-t-2 border-t-charcoal w-full ">
        <div className="container flex flex-col py-16 space-y-16">
          <div className="flex items-center space-x-8 justify-center w-full">
            <Facebook className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
          </div>
          <div className="flex flex-col items-center text-center space-y-16 md:space-y-0 md:flex-row md:space-x-16 justify-center ">
            {FooterData.map((data, i) => (
              <ul
                key={`list${i}`}
                className="flex flex-col space-y-2 [&>li]:cursor-pointer"
              >
                {data.title !== "LEGAL" && (
                  <li className="font-semibold !cursor-auto">{data.title}</li>
                )}
                {data.list.map((link, i) => (
                  <li
                    key={`link${i}`}
                    className={cn(
                      data.title === "LEGAL" && "font-semibold",
                      " hover:border-b-zinc-900 dark:hover:border-b-gray-300 border-b border-b-transparent transition-all"
                    )}
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
