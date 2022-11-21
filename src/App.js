import Hero from "./components/Hero";
import Navigation from "./components/Navigation";



function App() {
  return (
    <> 
    <Navigation />
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img className="heroimage" src="https://images.unsplash.com/photo-1629048068275-f8474842f48d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3434&q=80" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Welcome to the Tempo family</h1>
        <p className="py-6">Our philosophy is to assist and elevate our client’s careers 
        – both on and off the pitch.</p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </div>
  </div>

    </>
  );
}
export default App;
