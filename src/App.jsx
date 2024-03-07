import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";


function App() {
  return (
   <>
   <Navbar />
   <Outlet />
   </>
  );
}

export default App;
