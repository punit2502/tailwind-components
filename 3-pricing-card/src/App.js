import React from "react";
import { RecoilRoot, atom } from "recoil";
import PricingCard from "./components/PricingCard";
import PricingToggle from "./components/PricingToggle";

import plans from "./data/plans.json";

export const planDuration = atom({
  key: "planDuration",
  default: "yearly",
});

const App = () => {
  return (
    <RecoilRoot>
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <div>
          <div className="flex justify-between mb-12">
            <h1 className="font-black text-4xl">Choose your plan</h1>
            <PricingToggle />
          </div>
          <div className="grid grid-flow-col gap-10">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
