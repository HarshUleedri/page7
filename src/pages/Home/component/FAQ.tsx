import { useState } from "react";

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const faqItems: { question: string; answer: string }[] = [
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl py-20 flex ">
      <div>
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
          FAQ
        </div>
        <h2 className="font-semibold text-5xl mb-4">Frequently asked questions</h2>
        <p className="text-black/50">
          Everything you need to know about our consulting and AI Solutions -
          From strategy to inplemention.
        </p>
      </div>
      <div className="space-y-4 w-full">
        {faqItems.map((item, idx) => (
          <div
            className={`${currentIndex === idx ? "bg-primary text-secondary " : "bg-secondary"} rounded-md p-4 font-medium w-full`}
            onClick={() => setCurrentIndex(currentIndex === idx ? -1 : idx)}
            key={idx}
          >
            <div className="flex items-center justify-between w-full">
              <h6 className="text-xl font-medium">{item.question}</h6>
              {currentIndex === idx ? (
                <button
                  className=""
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(-1);
                  }}
                >
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
                    className=" size-4 cursor-pointer lucide lucide-minus-icon lucide-minus"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
              ) : (
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
                  className=" cursor-pointer size-4 lucide lucide-plus-icon lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </div>

            {currentIndex === idx && (
              <p className="text-sm text-secondary/50  font-light wrap-break-word">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
