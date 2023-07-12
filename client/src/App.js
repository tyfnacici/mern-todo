import Todo from "./components/Todo"
import Header from "./components/Header"

function App() {
  return (
    <div className="bg-red-300 flex flex-col h-screen relative">
      <Header />
      <div className="flex justify-center items-center min-h-full">
        <Todo />
      </div>
    </div>
  )
}

export default App
