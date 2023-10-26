import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import ShowUser from "./components/ShowUser";
import Counter from "./counter/Counter";
import MainPage from "./contextApiTest/MainPage";
import ContextAndReducer from "./reducerAndContextApi/ContextAndReducer";

function App() {
  return (
    <>
<div className="grid grid-cols-2">
        <MainPage/>
        <Counter />
        <ContextAndReducer/>
</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/show/:id" element={<ShowUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
