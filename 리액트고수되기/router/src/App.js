import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <h1>App.js</h1>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/new' element={ <New/> }/>
      <Route path='/edit' element={ <Edit/> }/>
      <Route path='/diary' element={ <Diary/> }/>
      <Route path='/diary/:id' element={ <Diary/> }/>
    </Routes>
    <RouteTest/>
    </div>
    </BrowserRouter>
  );
}

export default App;
