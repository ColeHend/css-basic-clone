import "./App.css";
import NavBar from "./navbar/navbar";
import FirstSect from "./section1/section1";
function App() {
  return (
    <div className="App">
      <header id="App-head">
        <NavBar />
        <FirstSect />
      </header>
    </div>
  );
}

export default App;
