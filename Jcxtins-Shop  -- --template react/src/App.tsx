import AppContext from "./components/Context/AppContext";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  
  return (
    <AppContext >
      <div className="bg-gray-50">
      <Nav />
        <div className=" bg-gradient-to-r from-blue-100 from-30% via-yellow-100 via-50% to-gray-200 to-90% h-[90vh] landscape:h-screen lg:h-screen -mt-[2em]">
          <Hero />
        </div>
        <Products/>
      </div>
    </AppContext>
  );
}

export default App;
