import { useState } from "react";
import { Link } from "react-router";

interface MenuType {
  text: string;
  link: string;
  children: MenuType[];
}

const Navbar = () => {
  const menu: MenuType[] = [
    {
      text: "Home",
      link: "/",
      children: [],
    },
    {
      text: "services",
      link: "/services",
      children: [],
    },
    {
      text: "About Us",
      link: "/about-us",
      children: [],
    },
    {
      text: "More Links",
      link: "",
      children: [
        {
          text: "item-1",
          link: "/item-1",
          children: [],
        },
        {
          text: "item-2",
          link: "/item-2",
          children: [],
        },
        {
          text: "item-3",
          link: "/item-3",
          children: [],
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between px-4 lg:px-20 py-4 ">
      {/* logo */}
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="lg:hidden block size-5"
          onClick={() => setIsOpen(true)}
        >
          <title>menu</title>
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
        <p className="font-heading font-bold leading-4 tracking-tight text-xl">
          Harsh
        </p>
      </div>
      {/* menu */}
      <div className="hidden lg:flex  gap-8 items-center">
        {menu.map((item, idx) => (
          <>
            <Link
              to={item.link}
              className={`relative uppercase text-sm text-black/50 font-medium   ${item.children.length < 0 && "cursor-pointer"}    flex items-center gap-2`}
              key={idx}
            >
              {item.text}
              {item.children.length > 0 && (
                <span className="hover:bg-black/10 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <title>dropdown</title>
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </span>
              )}
            </Link>
          </>
        ))}
      </div>
      {/* cta */}

      <button className="text-sm lg:text-base text-accent bg-black px-4 py-1 rounded-full cursor-pointer ">
        Buy Template
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-primary p-8">
          <div className="flex justify-between pb-2 border-b mb-6 border-secondary">
            <p className="text-secondary text-2xl ">Menu</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent size-6"
              onClick={() => setIsOpen(false)}
            >
              <title>close</title>
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-8 items-start ">
            {menu.map((item, idx) => (
              <>
                <Link
                  to={item.link}
                  className={`relative uppercase text-xl  font-medium   ${item.children.length < 0 && "cursor-pointer"}    flex items-center gap-2 text-accent`}
                  key={idx}
                  onClick={() => {
                    if (item.children.length === 0) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.text}
                  {item.children.length > 0 && (
                    <span className=" rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <title>dropdown</title>
                        <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                      </svg>
                    </span>
                  )}
                </Link>
              </>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
