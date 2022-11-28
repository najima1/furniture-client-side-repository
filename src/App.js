import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Spinner from "./Conponent/Pages/Spinner/Spinner";
import router from "./Conponent/Router/Router";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div><Toaster /></div>

    </div>
  );
}

export default App;
