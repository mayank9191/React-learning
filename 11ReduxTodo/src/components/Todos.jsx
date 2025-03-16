import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const updateOnClick = () => {

    dispatch(updateTodo())

  }


  return (
    <>
      <ul className="list-none">


        {todos.map((todo) => (


          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-4 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>

            {/* Wrap buttons inside a flex container */}
            <div className="flex gap-5">
              {/* Move Up Button */}
              <button
                // onClick={dispatch(updateTodo())}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
                     justify-center items-center bg-gray-50 hover:bg-gray-300 shrink-0 
                     disabled:opacity-50 focus:outline-none">
                🔼
              </button>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none 
               hover:bg-red-600 rounded text-md"
              >
                X
              </button>
            </div>
          </li>



        ))}
      </ul>
    </>

  )
}

export default Todos