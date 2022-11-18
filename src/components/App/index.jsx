import '../../style.css'
import Nav from "../Nav";
import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import { fruits } from "../../data/fruits";
import { vegetables } from "../../data/vegetables";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <Routes >
        <Route path = "/fruits_page" element = {<FruitsPage fruits = {fruits}/>}/>
        <Route path = "/vegetables_page" element = {<VegetablesPage vegetables = {vegetables} />}/>
      </Routes>
    </div>
  );
}

export default App;
