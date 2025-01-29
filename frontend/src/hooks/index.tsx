import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Todo {
  title: string;
  content: string;
  status: string;
  id: number;
}

export const useTodo = () => {  
  const [loading, setLoading] = useState(true);  
  const [todo, setTodo] = useState<Todo[]>([]);  

  const FetchTodo = async () => {  
    try {  
      const response = await axios.get(`${BACKEND_URL}/api/v1/todo/bulk`, {  
        headers: {  
          Authorization: localStorage.getItem("token"),  
        },  
      });  
      setTodo(response.data.post);  
      setLoading(false);  
    } catch (e) {  
      alert("fail fetch");  
    }  
  };  

  useEffect(() => {  
    FetchTodo();  
  },[]);  

  return {  
    loading,  
    todo,  
    refetch: FetchTodo  
  };  
};