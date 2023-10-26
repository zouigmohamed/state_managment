import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../reducers/userReducer";
const Home = () => {
  const users = useSelector((state) => state.users);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
<div className="bg-emerald-500 p-2">
        <p className=" text-center p-2"> counter value here used component named home inside the components folder  </p>{" "}
        <p className=" text-center p-2"> so it changes one you change the counter using the buttons in the corner above   </p>{" "}
        <p className="bg-red-500 w-10 mx-auto text-white m-2 rounded text-center p-2"> {counter.value}</p>{" "}
</div>
      <div className="text-center m-5">Crud App using Redux </div>
      <div>
        <Link
          to="/create"
          className="mx-auto flex my-8 bg-emerald-600 p-3 rounded w-32 hover:bg-white border-2 hover:tracking-widest border-emerald-600 hover:border-2 hover:text-black hover:border-emerald-600 justify-center text-white  text-lg text-center"
        >
          Create +
        </Link>
      </div>
      <div className="w-full mx-auto">
        <table className="w-3/4 divide-y mx-auto divide-gray-200  dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 ">
                  <img
                    src={user.image || "../../public/user2.jpg"}
                    alt="image"
                    width={40}
                    height={40}
                    className="overflow-hidden object-center w-12 h-12 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-start  text-gray-800 dark:text-gray-200">
                  {user.email}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-right flex justify-around text-sm font-medium">
                  <button>
                    <Link
                      className="text-blue-500 hover:text-blue-700 m-2"
                      to={`/update/${user.id}`}
                    >
                      Update
                    </Link>
                  </button>
                  <button>
                    <Link
                      className="text-blue-500 hover:text-blue-700 m-2"
                      to={`/show/${user.id}`}
                    >
                      show
                    </Link>
                  </button>
                  <button>
                    <Link
                      onClick={() => handelDelete(user.id)}
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
