import {getDatabase ,ref,set} from "firebase/database"
// import{dbFirebase} from "./firebase";
import appFirebase from "./firebase"
import './App.css';


const db = getDatabase(appFirebase);

function App() {
  const putData = (e) => {
    console.log(e);
    set(ref(db,"users/piyush"),{
      id:1,
      name:"piyush",
      age:23,
    });
  };

  return (
    <div className="App">
      <h1>Fire Base </h1>
      <button onclick={putData}>putData</button>
      </div>
  );
}

export default App;
