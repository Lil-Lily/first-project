import './App.css';
import {Accordion} from "./components/Accordion";
import {CardList} from "./components/CardList";
import {SelectProducts} from "./components/SelectProducts";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
            <Accordion/>
        </div>
        <div className="col-md-9">
            <SelectProducts />
            <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;
