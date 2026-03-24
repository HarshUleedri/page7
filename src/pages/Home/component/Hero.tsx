const Hero = () => {
  const plans: string[] = [
    "Strategic",
    "AI- Focused",
    "Grow Faster",
    "Build Smart",
  ];

  return (
    <section
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/18766217/pexels-photo-18766217.jpeg)`,
      }}
      className=" backdrop-blur-lg   bg-center bg-cover h-screen flex justify-between p-20"
    >
      <div className="lg:w-1/2 space-y-4  ">
        {/* subtitle */}
        <div className="flex mt-8 font-mono text-lg font-thin items-center  text-white/90">
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
          Harsh Consulting
        </div>
        {/* heading */}
        <h1 className="text-white">
          Clear insights. Real strategy. Sustainable growth
        </h1>
        {/* paragraph */}
        <p className="text-white/90 lg:w-3/4">
          We help startups and growing teams validate ideas,scale products, and
          make data-driven decisions.
        </p>
        {/* CTA */}
        <div className="space-x-8 mt-10">
          <button className="btn-secondary px-6 py-1 uppercase font-extralight">
            View Demo
          </button>
          <button className="btn-primary font-bold px-6 py-1 uppercase">
            Book a Call
          </button>
        </div>
      </div>
      <article className="bg-white/20 lg:w-1/4 self-end rounded-2xl backdrop-blur-sm    border border-white/50 ">
        <header className="rounded-lg m-2  bg-white p-2 ">
          <h4 className="font-bold text-xl ">Performace</h4>
          <p className="text-xs text-black/40">In the Past 7 days</p>
        </header>
        <div className="pl-6 my-4">
          <div className="flex gap-4  items-end">
            <p className="text-5xl text-white">
              <strong>49%</strong>
            </p>
            <div className="h-3 w-6 bg-green-500 border-2 rounded-sm border-white/80"></div>
          </div>
          <p className="text-white/40">Business growth</p>
        </div>
        <footer className="flex flex-wrap gap-2 p-2">
          {plans.map((item, idx) => (
            <div
              className="px-4 py-1 bg-white/10 rounded-full border border-white/50 backdrop-blur-2xl text-white"
              key={idx}
            >
              {item}
            </div>
          ))}
        </footer>
      </article>
    </section>
  );
};

export default Hero;
