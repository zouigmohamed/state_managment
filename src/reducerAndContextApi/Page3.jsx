import { useContext } from "react";
import { CountContext } from "./ContextAndReducer";

const Page3 = () => {
  const countContext = useContext(CountContext);
  return (
    <>
      <p className="bg-orange-400"> count here is from the main component to this page names page n 3 : <span className="bg-red-700">{countContext.countState}</span></p>
      <div className="border-indigo-600">
        <p> those button bellow are handling the counter from the component named page n3  </p>
        <div>
          <button className="bg-blue-500 w-10 h-10 m-1 rounded text-xl text-center font-bold" onClick={() => countContext.countDispatch("increment")}>
            +
          </button>
          <button className="bg-blue-500 w-10 h-10 m-1 rounded text-xl text-center font-bold" onClick={() => countContext.countDispatch("increment")}>
            -
          </button>
          <button className="bg-blue-500 w-10 h-10 m-1 rounded text-xl text-center font-bold" onClick={() => countContext.countDispatch("reset")}>
            0
          </button>
        </div>
</div>
    </>
  );
};

export default Page3;
