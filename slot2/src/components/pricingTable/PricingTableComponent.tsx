import PricingChildComponent from "./childComponent/PricingTableChildComponent";

export default function PricingTableComponent() {
  return (
    <div>
      <div className="px-20 pt-24">
        <h1 className="uppercase font-bold text-3xl relative before:content-[''] before:absolute before:w-6 before:h-1 before:bg-red-500 before:-top-2 before:left-0">
          pricing table
        </h1>
      </div>

      <div className="bg-red-500 text-white w-32 text-center p-2 mt-16 mx-20">
        <p className="uppercase font-bold">recommend</p>
      </div>

      <div className="px-20 flex gap-5 justify-between flex-wrap">
        <PricingChildComponent />
      </div>
    </div>
  );
}
