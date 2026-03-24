const JoinUs = () => {
  return (
    <section className=" bg-secondary flex flex-col lg:flex-row lg:h-140 ">
      <div className="lg:w-1/2 space-y-4 px-4  py-10 lg:p-20 ">
        {/* subtitle */}
        <div className="flex lg:mt-8 font-mono text-lg font-thin items-center  ">
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
          Join US
        </div>
        {/* heading */}
        <h1 className="pr-20">Ready to elevate your business?</h1>
        {/* paragraph */}
        <p className=" lg:w-3/4">
          Partner with us to take your digital presence to the next level.
        </p>
        {/* CTA */}
        <button className="text-accent bg-black rounded-full py-2 text-sm px-8 cursor-pointer">
          Book a Call
        </button>
      </div>

      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg',
        }}
        className="  h-96 lg:w-1/2 size-full bg-contain"
      ></div>
    </section>
  );
};

export default JoinUs;
