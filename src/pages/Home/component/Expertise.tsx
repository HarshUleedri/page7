const Expertise = () => {
  return (
    <section className="flex flex-col lg:flex-row mx-auto max-w-7xl w-full my-10 gap-14 lg:my-20 px-4 lg:px-4 ">
      <div className="lg:w-1/2 flex flex-col items-start gap-8 lg:gap-0 justify-between">
        <div className="flex mt-8 font-mono text-lg font-thin items-center  text-black">
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
          Expertise
        </div>
        <h3 className="lg:w-3/5 lg:text-3xl">
          Expertise That Drives Your Transformation
        </h3>
      </div>

      <div className="lg:w-1/2 space-y-14">
        <h2 className="text-3xl lg:text-5xl ">
          We bring together strategic thinking to help business operate smarter
          and grow stronger.
        </h2>

        <div className="flex flex-col lg:flex-row gap-12  lg:gap-0 lg:justify-between ">
          <div className="">
            <div className="bg-black p-2 mb-4 rounded-lg w-fit ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-accent size-5"
              >
                <title>Phone</title>
                <path d="M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Digital Transformation</h3>
            <p className="text-base text-black/60 font-medium">
              Modernizing systems and workflows to enhance efficiency and
              scalability
            </p>
          </div>
          <div>
            <div className="bg-black p-2 mb-4 rounded-lg w-fit ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-accent"
              >
                <title>Refresh</title>
                <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Process Optimization</h3>
            <p className="text-base text-black/60 font-medium">
              Improving operation to reduce friction, increase speed and boost
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
