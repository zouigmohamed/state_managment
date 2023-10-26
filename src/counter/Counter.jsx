import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { increment , decrement , reset} from "../reducers/CounterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
      <div className=" bg-slate-600 p-6 text-white text-lg text-center">
          <p>counter component</p>
      <div className="bg-orange-500 w-20 mx-auto rounded-lg px-5 m-2 text-center">
        {counter.value}
      </div>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="bg-emerald-500 mx-3 w-auto p-2 rounded"
        >
          increment +
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-emerald-400 mx-3 w-auto p-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-emerald-300 mx-3 w-auto p-2 rounded"
        >
          increment -
        </button>
      </div>
    </div>
  );
};

export default Counter;
