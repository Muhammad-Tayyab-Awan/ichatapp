import { useState } from "react";

const FeatureAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Real Time Chat",
      content:
        "Experience instant and seamless communication with our real-time chat feature. Messages are delivered instantly, ensuring smooth and uninterrupted conversations. Whether you're chatting one-on-one or in a group, stay connected with fast, reliable, and secure messaging, making communication effortless.",
    },
    {
      title: "Search Users",
      content:
        "Easily find and connect with people using our user search feature. Whether you're looking for friends, colleagues, or new connections, our smart search functionality allows you to quickly locate users and start chatting in seconds. Stay connected with ease and expand your network effortlessly",
    },
    {
      title: "Reporting & Blocking",
      content:
        "Easily find and connect with people using our user search feature. Whether you're looking for friends, colleagues, or new connections, our smart search functionality allows you to quickly locate users and start chatting in seconds. Stay connected with ease and expand your network effortlessly",
    },
  ];

  return (
    <div className="mx-auto w-[80%]">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between bg-gray-100 p-4 text-left transition hover:bg-gray-200 focus-visible:outline-hidden"
          >
            <span className="font-medium">{item.title}</span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${openIndex === index ? "max-h-96 p-4" : "max-h-0"}`}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureAccordion;
