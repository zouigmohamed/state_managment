import { createContext, useReducer } from "react";
import Page1 from "./Page1";
import reducer, { initialState } from "./reducer";
export const CountContext = createContext();
function ContextAndReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-slate-400 text-center text-white">
      <span className="bg-red-700">{count}</span>
    <CountContext.Provider value={{countState : count , countDispatch :dispatch}}>
      <div>
        <Page1 />
      </div>
    </CountContext.Provider>
    </div>
  );
}

export default ContextAndReducer;
