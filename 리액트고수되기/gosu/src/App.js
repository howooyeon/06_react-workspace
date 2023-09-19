import './App.css';
import data from'./data.js';
import {Link, Routes} from 'react-router-dom';


function App() {
  const [data, setData] = setData(data);
  return (
    <div className="App">
      <Link to="/list" className="list"></Link>
      <Link to="/regist" className="add"></Link>
    
    <Routes>
      <Route path="/" element={
        <>
        <h2>Message</h2>
        </>
      }/>
      <Route/>
    </Routes>

    </div>
  );
}

export default App;
