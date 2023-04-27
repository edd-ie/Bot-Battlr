import './App.css';
import Profiles from './components/Profiles'
import Army from './components/Army'
import{useState} from 'react'



function App() {
  const[botData, setBotData] = useState([]);

  return (
    <div className="App">
      <Army botData={botData}/>
      <Profiles setBotData={setBotData} botData={botData}/>
    </div>
  );
}

export default App;
