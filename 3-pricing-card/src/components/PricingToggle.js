import React from "react";
import { useRecoilState } from "recoil";
import classNames from "classnames";

import { planDuration } from "../App";

const PricingToggle = () => {
  const [duration, setPlanDuration] = useRecoilState(planDuration);

  return (
    <div className="bg-togglebg mt-4 lg:mt-0 py-2 flex items-center self-end lg:self-auto px-2 rounded-capsule">
      <button
        className={classNames(
          "toggle",
          duration === "monthly" && "bg-white px-4 h-full rounded-capsule"
        )}
        onClick={() => setPlanDuration("monthly")}
      >
        Monthly
      </button>
      <button
        className={classNames(
          "toggle",
          duration === "yearly" && "toggle-selected"
        )}
        onClick={() => setPlanDuration("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingToggle;
