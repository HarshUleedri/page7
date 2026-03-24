const OurTeam = () => {
  const teamMember: { title: string; name: string; image: string }[] = [
    {
      title: "CEO",
      name: "Harsh Uleedri",
      image:
        "https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg",
    },
    {
      title: "Manager",
      name: "deserving one",
      image:
        "https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg",
    },
    {
      title: "Adviser",
      name: "Experience and Expert",
      image:
        "https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg",
    },
  ];
  return (
    <section className="bg-secondary px-4  lg:px-0 py-10 lg:py-20 ">
      <div className="mx-auto max-w-7xl">
        <div className="flex mb-4  font-mono text-lg font-thin items-center  text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-dot-icon lucide-dot"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>
          Our Team
        </div>
        <h2 className="mb-1">The people who drive our success</h2>
        <p className="text-black/60 font-medium mb-12">
          our team consists of skilled professionals with expert in strategy,
          operations analytics, and digital transformation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {teamMember.map((item, idx) => (
            <div key={idx} className="relative">
              <div
                className="h-80 w-full
              "
              >
                <img
                  className="h-full rounded-t-xl w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <button className="text-accent p-2 absolute top-4 right-4"></button>
              <div className="p-4 rounded-b-xl bg-white">
                <span>{item.title}</span>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
