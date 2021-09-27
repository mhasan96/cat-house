import "./App.css";
import Cats from "./Components/Cats/Cats";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App main-cover">
      <Header></Header>
      {/* <h2>Welcome to Cat World</h2> */}
      <Cats></Cats>
    </div>
  );
}

export default App;
