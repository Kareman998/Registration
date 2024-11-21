
  /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const OrderOverview = ({ price, sessions }) => {
  const plans = [
    { name: "6 MONTHS", price: "150.00€" },
    { name: "9 MONTHS", price: "200.00€" },
    { name: "12 MONTHS", price: "250.00€" },
    { name: "18 MONTHS", price: "300.00€" },
    { name: "24 MONTHS", price: "350.00€" },
    { name: "36 MONTHS", price: "400.00€" },
  ];

  const [activePlan, setActivePlan] = useState(null); 
  const [currentPrice, setCurrentPrice] = useState("227.20€"); 

  const overviewDetails = [
    { label: "number of session p.m", value: "8" },
    { label: "regular price", value: "29.60€", valueClass: "text-red-500" },
    { label: "your price", value: currentPrice },
    { label: "discount 4%", value: "-9.20€", isBorder: true },
    { label: "setup free", value: "0.00€" },
    { label: "TOTAL P.M.", value: currentPrice },
  ];

  const handlePlanClick = (plan) => {
    setActivePlan(plan.name); 
    setCurrentPrice(plan.price); 
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="mb-4 font-medium text-xs">ORDER OVERVIEW</h1>

      {/* Plan Selection */}
      <div className="grid grid-cols-3 mt-6">
        {plans.map((plan, index) => (
          <button
            key={index}
            onClick={() => handlePlanClick(plan)}
            className={`w-full bg-white text-gray-500 px-4 py-4 border text-xs font-mono ${
              activePlan === plan.name ? "border-blue-500" : "border-gray-300"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Advance Payment Discount */}
      <div className="flex items-center space-x-2 mt-6 mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-7 h-4 bg-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-4 peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-gray-500 after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-gray-600"></div>
        </label>
        <span className="font-mono text-xs">Pay in Advance - Extra 5% Discount</span>
      </div>

      {/* Order Details */}
      <div className="space-y-3">
        {overviewDetails.map((detail, index) => (
          <div
            key={index}
            className={`flex justify-between font-normal text-xs ${
              detail.isBorder ? "border-b pb-2 mb-3" : "!mb-6"
            }`}
          >
            <span className="uppercase text-slate-400">{detail.label}</span>
            <span className={detail.valueClass || ""}>{detail.value}</span>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="mt-6">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm">
          I accept the Terms & Conditions and understand my right of withdrawal as well as the
          circumstances that lead to a repeal of the same.
        </label>
      </div>
    </div>
  );
};

export default OrderOverview;
