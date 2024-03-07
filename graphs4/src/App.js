import { Pie } from 'react-chartjs-2';
import './App.css';
import Barchart from './components/barchart';
import Piechart from './components/piechart';
import Linechart from './components/line';
import myImage from 'C:/Users/USER-PC/Documents/GitHub/graphs4/graphs4/src/The Golden Generation ✨⚽️.jpg';

function App() {
  return (
    <div className="App">
      <Barchart/>
     <Piechart/>
     <Linechart/>
     <Piechart/>
     <Barchart/>

     <div>
      <img src={myImage} alt="Description of the image" />
    </div> 
    
    </div>
  );
}

export default App;
