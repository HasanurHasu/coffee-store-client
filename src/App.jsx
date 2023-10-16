import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";


function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-xl text-center">--- Sip & Savor ---</h1>
        <h1 className="text-center text-3xl font-bold mt-2">Our Popular Products</h1>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {
            coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
