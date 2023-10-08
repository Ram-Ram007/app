import Read from "./Components/read";
import Create from "./Components/create";
import Update from "./Components/update";
import "./App.css";

function App() {
  return (
    <div>
      crud operation
      <Create />
      <Update />
      <Read />
    </div>
  );
}

export default App;
