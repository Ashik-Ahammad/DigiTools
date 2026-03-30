import { Package, Rocket, User } from "lucide-react";
import React from "react";

const steps = [
  {
    num: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: <User className="w-24 h-24"></User>,
  },
  {
    num: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: <Package className="w-24 h-24"></Package>,
  },
  {
    num: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: <Rocket className="w-24 h-24"></Rocket>,
  },
];

const StepsSection = () => {

  return (

    <div className="bg-[#F9FAFC] py-24 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] text-md">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm hover:shadow-lg border border-base-200 rounded-2xl p-15 relative transition-shadow duration-300"
            >

              <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#4F39F6] text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                {step.num}
              </div>

              <div className="flex flex-col items-center text-center mt-2">

                <div className="w-35 h-35 rounded-full bg-[#F3E8FF] text-[#4F39F6] flex items-center justify-center mb-8">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#627382] text-[16px]  px-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
