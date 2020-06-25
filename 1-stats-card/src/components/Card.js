import React from "react";

const results = [
  {
    id: 1,
    heading: "70%",
    desc: "We increased the feature adoption of our users with 70%.",
  },
  {
    id: 2,
    heading: "225",
    desc: "New customers opted for our PRO features.",
  },
  {
    id: 3,
    heading: "2M",
    desc: "Notifications sent trough our and third-party platforms.",
  },
];

const Card = () => {
  return (
    <div className="flex justify-center items-center lg:px-48 lg:h-screen bg-mainbg text-white">
      <div className="bg-cardbg px-8 py-10 lg:px-32 lg:py-20 text-center">
        <h1 className="text-2xl font-bold">Our results</h1>
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-16 py-16">
          {results.map(({ heading, desc }) => (
            <div>
              <h2 className="font-bold text-5xl pb-6">{heading}</h2>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <span>
          Read our top clients <a href="#">testimonials</a>
        </span>
      </div>
    </div>
  );
};

export default Card;
