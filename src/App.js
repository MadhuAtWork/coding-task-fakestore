import './App.css';
import { useState } from 'react';
import Islands from "./Components/Islands";
import Arctic from "./Components/Arctic";
import Pools from "./Components/Pools";
import Surfing from "./Components/Surfing";
import Omg from "./Components/Omg";
import Sharedhomes from "./Components/Sharedhomes";
import Parks from "./Components/Parks";
import Lake from "./Components/Lake";
import Frams from "./Components/Frams";
import Tinyhomes from "./Components/Tinyhomes";
import Tropical from "./Components/Tropical";
import Caves from "./Components/Caves";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree,faMagnifyingGlass,faHotel,faBedPulse,faTractor,faPersonShelter ,faFeather,faBridge,faPersonSwimming,faMountainSun,faMountainCity,faCloudShowersWater,faChampagneGlasses} from '@fortawesome/free-solid-svg-icons';


function App() {
  const [data, setdata] = useState("icons1");

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <div className="logo">airbnb</div>
          <div className="search"> 
          <button><h1><FontAwesomeIcon icon={faMagnifyingGlass}/></h1></button></div>
          <div className="singup"><button>LOGIN</button></div>

        </div>
        <div className="main">
          <div className="icons1" onClick={() => setdata("icons1")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faTree} /></h1></div><span>Islands</span></div>
          <div className="icons2" onClick={() => setdata("icons2")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faBridge} /></h1></div> <span>Arctic</span></div>
          <div className="icons3" onClick={() => setdata("icons3")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faPersonSwimming} /></h1></div><span>pools</span></div>
          <div className="icons4" onClick={() => setdata("icons4")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faMountainSun} /></h1></div><span>omg!</span> </div>
          <div className="icons5" onClick={() => setdata("icons5")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faMountainCity} /></h1></div> surfing</div>
          <div className="icons6" onClick={() => setdata("icons6")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faCloudShowersWater} /></h1></div>shared homes </div>
          <div className="icons7" onClick={() => setdata("icons7")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faChampagneGlasses} /></h1></div>parks </div>
          <div className="icons8" onClick={() => setdata("icons8")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faFeather} /></h1></div>caves </div>
          <div className="icons9" onClick={() => setdata("icons9")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faHotel} /></h1></div>tropical </div>
          <div className="icons10" onClick={() => setdata("icons10")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faPersonShelter} /></h1></div> tiny homes</div>
          <div className="icons11" onClick={() => setdata("icons11")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faTractor} /></h1></div>Farms</div>
          <div className="icons12" onClick={() => setdata("icons12")}>
            <div className="fonticon"><h1><FontAwesomeIcon icon={faBedPulse} /></h1></div> lake</div>
        </div>

        <div className="menu">
          {data == "icons1" ? <Islands></Islands> : ""}
          {data == "icons2" ? <Arctic></Arctic> : ""}
          {data == "icons3" ? <Pools></Pools> : ""}
          {data == "icons4" ? <Omg></Omg> : ""}
          {data == "icons5" ? <Surfing></Surfing> : ""}
          {data == "icons6" ? <Sharedhomes></Sharedhomes> : ""}
          {data == "icons7" ? <Parks></Parks> : ""}
          {data == "icons8" ? <Caves></Caves> : ""}
          {data == "icons9" ? <Tropical></Tropical> : ""}
          {data == "icons10" ? <Tinyhomes></Tinyhomes> : ""}
          {data == "icons11" ? <Frams></Frams> : ""}
          {data == "icons12" ? <Lake></Lake> : ""}
        </div>


      </div>
    </div>
  );
}

export default App;

