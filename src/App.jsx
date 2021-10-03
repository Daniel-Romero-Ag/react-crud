import crud from "./images/crud.png";
import "./App.css";
import WhatIs from "./components/WhatIs.jsx";
import Crud from "./components/Crud";

function App() {
  return (
    <>
      <header>
        <h1 className="titulo"> Crud con CSS puro y React Js</h1>
        <WhatIs crud={crud}></WhatIs>
        <Crud></Crud>
      </header>
      
    </>
  );
}

export default App;
