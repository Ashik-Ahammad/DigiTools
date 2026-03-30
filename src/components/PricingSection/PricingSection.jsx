import { CheckIcon } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: "29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];


const PricingSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-300">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 flex flex-col
                ${
                  plan.isPopular
                    ? "bg-[#4F39F6] text-white shadow-xl border-none"
                    : "bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:shadow-md"
                }
              `}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFF4D5] text-[#D97706] px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.isPopular ? "text-purple-200" : "text-[#627382]"}>
                {plan.description}
              </p>

              <div className="my-8 flex items-baseline">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-lg ml-1 font-medium ${plan.isPopular ? "text-purple-200" : "text-[#627382]"}`}>
                  /Month
                </span>
              </div>

              <ul className="mb-10 space-y-4 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-[15px]">
                    {plan.isPopular ? (
                      <CheckIcon className="w-5 h-5 text-white mr-3" />
                    ) : (
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                    )}
                    <span className={plan.isPopular ? "text-white" : "text-[#4B5563]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 px-6 rounded-full font-bold text-[15px] hover:cursor-pointer duration-200 mt-auto
                  ${
                    plan.isPopular
                      ? "bg-white text-[#4F39F6] hover:bg-gray-100"
                      : "bg-[#4F39F6] text-white hover:bg-[#4F39F6] hover:shadow-lg "
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default PricingSection;