import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";

import { useNavigate, useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Todo, useTodo } from "../hooks";

const EditTodo = () => {
  // Initialize with default empty string values
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    status: "Todo Status", // Set a default status
  });
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(id,"id");
        
      const response = await axios.put(
        `${BACKEND_URL}/api/v1/todo/${id}`,
        inputs,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response, "edit");
      
      setInputs({
        title: "",
        content: "",
        status: "Todo Status",
      });
      navigate("/home");
    
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <Appbar />
      
        <div  className="flex justify-center h-screen  ">
          <div className="relative bg-white rounded-lg shadow w-1/2 ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold">Edit Todo</h3>
            </div>

            <form
              className="p-4 md:p-5"
              onSubmit={ handleSubmit}
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    Title
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Type todo title"
                    className="p-2 w-full"
                    value={inputs.title}
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    Content
                  </label>
                  <textarea
                    onChange={handleInput}
                    name="content"
                    id="content"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write Todo content here"
                    value={inputs.content}
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Status
                  </label>
                  <select
                    onChange={handleInput}
                    name="status"
                    value={inputs.status}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="Todo Status">Todo Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="text-white inline-flex items-center bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
   
    </div>
  );
};

export default EditTodo;
