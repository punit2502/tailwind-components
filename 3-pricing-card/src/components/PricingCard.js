import React from "react";
import classNames from "classnames";
import { useRecoilValue } from "recoil";

import { planDuration } from "../App";

const PricingCard = ({ name, pricing, description, featured }) => {
  const duration = useRecoilValue(planDuration);

  return (
    <div className="flex flex-col bg-white p-8 max-w-sm">
      <div className="font-bold">
        <h3 className="text-2xl pb-8">{name}</h3>
        <h4 className="text-xl">
          ${duration === "yearly" ? pricing[0] : pricing[1]} / month
        </h4>
        <span className="text-primary text-opacity-75">Billed {duration}</span>
      </div>
      <p className="font-semibold text-primary text-opacity-75 py-8 flex-1">
        {description}
      </p>
      <button
        className={classNames(
          "py-4 rounded-md",
          featured
            ? "text-white bg-primary"
            : "border border-primary text-primary"
        )}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
