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

  return (
    <header className="flex items-center justify-between px-20 py-4 ">
      {/* logo */}
      <div>
        <p className="font-heading font-bold leading-4 tracking-tight text-xl">
          Harsh
        </p>
      </div>
      {/* menu */}
      <div className="flex gap-8 items-center">
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

      <button className="btn-accent  ">Buy Template</button>
    </header>
  );
};

export default Navbar;
