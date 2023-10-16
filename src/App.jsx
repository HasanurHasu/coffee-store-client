import { useLoaderData } from "react-router-dom"


function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1 className="text-5xl text-center font-bold">Coffee Store</h1>
      <h1 className="text-center text-2xl font-bold mt-2">Total Number of Coffee: {coffees.length}</h1>
    </>
  )
}

export default App
