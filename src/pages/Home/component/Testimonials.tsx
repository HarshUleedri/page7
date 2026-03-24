const Testimonials = () => {
  return (
    <section className="bg-primary px-4 lg:px-0 py-10 lg:py-20 ">
      <div className="  mx-auto max-w-7xl">
        <div className="flex mb-4  font-mono text-lg font-thin items-center text-accent ">
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
        <h2 className="mb-12 text-accent">What they say about us ?</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 justify-center">
          <div className="p-4 rounded-xl bg-white ">
            <div className="mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="mb-4">
              "They brought clarity to complex problem, breaking down barriers
              and delivering innovative solutions."
            </p>
            <div className="flex gap-2 items-center">
              <img
                src="https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg"
                className="rounded-full size-10"
                alt="profile"
              />
              <div>
                <h6 className="text-sm font-bold"> Mery Mos</h6>
                <p className="text-xs text-black/50">CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white ">
            <div className="mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="mb-4">
              "They brought clarity to complex problem, breaking down barriers
              and delivering innovative solutions."
            </p>
            <div className="flex gap-2 items-center">
              <img
                src="https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg"
                className="rounded-full size-10"
                alt="profile"
              />
              <div>
                <h6 className="text-sm font-bold"> Mery Mos</h6>
                <p className="text-xs text-black/50">CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white ">
            <div className="mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="mb-4">
              "They brought clarity to complex problem, breaking down barriers
              and delivering innovative solutions."
            </p>
            <div className="flex gap-2 items-center">
              <img
                src="https://images.pexels.com/photos/26692095/pexels-photo-26692095.jpeg"
                className="rounded-full size-10"
                alt="profile"
              />
              <div>
                <h6 className="text-sm font-bold"> Mery Mos</h6>
                <p className="text-xs text-black/50">CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
