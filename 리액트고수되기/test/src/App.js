import './App.css';
import dummydata from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const navigate = useNavigate();

  const [data, setData] = useState(dummydata);

  const onDelete = (targetId)=>{
    const newMessageList = data.filter((it)=>it.id !== targetId)
    setData(newMessageList);
  }

  const onCreate = (state)=>{
    const newItem = {...state}
    setData([...data, newItem]);
    navigate("/");
  }

  return (
    <div className="App">
        
        <Link to="/list" className='list'>List</Link>
        <Link to="/regist" className='add'>Add New Message</Link>

        <Routes>
          <Route path="/" element={
            <>
              <h2>Message</h2>
              <MessageList MessageList={data} onDelete={onDelete}/>
            </>
          }/>
          <Route path="/list" element={
            <>
              <MessageList MessageList={data} onDelete={onDelete}/>
            </>
          }/>
          <Route path="/regist" element={
            <>
              <h2>Create Message</h2>
            </>
          }/>
        </Routes>

    </div>
  );
}


function MessageList({MessageList, onDelete}){
  return(
    <div className="MessageList">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Writer</th>
            <th>Message</th> 
            <th>write Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            MessageList.map((it)=>{ })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;