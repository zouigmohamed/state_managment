import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../reducers/userReducer";
const Create = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const users = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: (users.length +1),
        name,
        email,
      })
      );
      navigate("/")
  };
  return (
    <>
      <h1 className="text-2xl mt-8 mx-auto p-3 rounded-xl capitalize text-center bg-slate-400 w-1/2">
        add new user{" "}
      </h1>

      <div className="flex justify-center mt-20 border-2  bg-emerald-100 p-4 w-1/2 mx-auto border-red-500 rounded-lg">
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Full Name :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-00 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
