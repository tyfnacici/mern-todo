import React from "react"

const Todo = () => {
  return (
    <div className="flex flex-col grow-1 w-1/3">
      <div>
        <p className="py-3 pl-4 text-xl font-semibold border-2 bg-gray-100 border-gray-300">
          Todos (5)
        </p>
      </div>

      <div className="p-5 bg-white">
        <div className="flex">
          <input
            placeholder="Enter a todo here."
            className="p-3 grow rounded-l-md border-2 border-gray-300"
          />
          <button className="p-3 bg-blue-600 text-white rounded-r-md">
            Submit
          </button>
        </div>
        <div className="grow bg-gray-100 border-2 border-gray-300 mt-5">

          <div className="flex justify-between items-center py-2 px-2">
            <div className="flex space-x-2">
              <input type="checkbox" name="" id="" />
              <p>Walk The Dog</p>
            </div>
            <div className="flex text-white space-x-2">
              <button className="px-2 py-1 bg-green-600 hover:bg-green-800">Edit</button>
              <button className="px-2 py-1 bg-red-600 hover:bg-red-800">Delete</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Todo
