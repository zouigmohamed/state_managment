import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((item) => item.id == id);
  const { name, email } = existingUser[0];

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  return (
    <>
      <h1 className="text-2xl mt-8 mx-auto p-3 rounded-xl capitalize text-center bg-slate-400 w-1/2">
        user info{" "}
      </h1>

      <div className="flex justify-center mt-20 border-2  bg-emerald-100 p-4 w-1/2 mx-auto border-red-500 rounded-lg">
        <form className="w-full max-w-sm">
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
              <p
                className="bg-gray-200 appearance-none border-2 border-gray-00 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
              >
                {userName}
              </p>
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
              <p
                className="bg-gray-200 appearance-none border-2 border-gray-00 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
              >
                {userEmail}
              </p>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">

              <Link
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                to="/"
              >
                back to list 
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
