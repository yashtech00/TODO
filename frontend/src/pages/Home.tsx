import Appbar from "../components/Appbar";
import { useTodo } from "../hooks";
import Todoscard from "../components/Todoscard";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";

const Home = () => {
  const { todo, loading,refetch } = useTodo();
  const [searchItem, setSearchItem] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/todo/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      await refetch();
    } catch (e) {
      console.error(e);
    }
  };

  // Function to trim content
  const trimContent = (content: string, maxLength: number) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  const handleSearch=(event)=>{
    setSearchItem(event.target.value.toLowerCase())
  }
  const filteredTodos = todo.filter((todoItem)=>
    todoItem.title.toLowerCase().includes(searchItem) ||
    todoItem.content.toLowerCase().includes(searchItem)
)

  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <div className="font-bold text-5xl text-center m-10">Todo List</div>
          <div className="flex justify-center">
            <input
              placeholder="Search Todo"
              type="text"
              className=" p-4 border-b-1  w-1/2"
              onChange={handleSearch}
            />
            <Link to={"/AddTodo"}>
              <button className="p-4 ml-10 bg-black text-white font-medium text-lg rounded-xl cursor-pointer">
                Add Todo
              </button>
            </Link>
          </div>
          <div>
      {filteredTodos.map((todoItem) => (
        <div
          key={todoItem.id}
          className="mt-10 flex shadow-2xl shadow-gray-500 justify-between p-4"
        >
          <div>
            <div className="text-xl">{todoItem.title}</div>
            <div className="text-slate-500">
              {trimContent(todoItem.content, 10)}
            </div>
            <div
              className={`p-2 rounded-lg border w-[100px] mt-4  text-center ${
                todoItem.status === "Completed"
                  ? "bg-green-200 border-green-500"
                  : todoItem.status === "Pending"
                  ? "bg-yellow-200 border-yellow-500"
                  : "bg-gray-50 border-gray-300"
              }`}
            >
              {todoItem.status}
            </div>
          </div>
          <div className="flex">
            <div>
              <Link to={`/EditTodo/${todoItem.id}`}>
                <button className="cursor-pointer p-2 m-2 bg-black text-white font-normal px-4 rounded-xl">
                  Edit
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => handleDelete(todoItem.id)}
                className="cursor-pointer p-2 m-2 bg-black text-white font-normal rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
