import { useState } from 'react';
import './App.css';
import dataDummy from'./data.js';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  const [data, setData] = useState(dataDummy);

  const onDelete = (targetId)=> {
    const newMessageList = data.filter((it)=>it.id !== targetId)
    setData(newMessageList);
  }

  const onCreate=(state)=> {
    const newItem = {...state}
    setData([...data, newItem]);
    navigate("/");
  }

  return (
    <div className="App">
      <Link to="/list" className="list">List</Link>/
      <Link to="/regist" className="add">Add New Movie</Link>
    
    <Routes>
      <Route path="/" element={
        <>
        <h2>Message</h2>
        <MessageList messageList={data} onDelete={onDelete}/>
        </>
      }/>
      <Route path='/list' element={
        <>
        <h2>MessageList</h2>
        <MessageList messageList={data} onDelete={onDelete}/>
        </>
      }/>
      <Route path='/regist' element={
        <>
        <h2>Write Message</h2>
        <MessageEditor onCreate={onCreate}/>
        </>
      }/>
    </Routes>

    </div>
  );
}

function MessageList({messageList, onDelete}){
  return(
    <div className='MessageList'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>writer</th>
          <th>message</th>
          <th>writeDate</th>
        </tr>
      </thead>
      <tbody>
      {
         messageList.map((it)=>{
          return(
              <MessageItem key={it.id} {...it} onDelete={onDelete} />
          )
        })

      }
      </tbody>
    </table>
    </div>
  )
}

function MessageItem({id, writer, message, writeDate, onDelete}){
 const handleDelete= ()=>{
  onDelete(id);
 }
 return(
  <>
  <tr>
        <td>{id}</td>
        <td>{writer}</td>
        <td>{message}</td>
        <td>{writeDate}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>

  </>
 )
}

function MessageEditor({onCreate}){
  const [state, setState] = useState({
    id:"",
    writer:"",
    message:"",
    writeDate:"",
  })

  const handleChangeState= (e)=> {
    setState({...state,[e.target.name]:e.target.value});
  }

  const handleSubmit = ()=>{
    onCreate(state)
    setState({
    id:"",
    writer:"",
    message:"",
    writeDate:"",
    })
    }
    return(
    <div className='MessageEditor'>
      <>
        <div>
        <input
              placeholder='Input message id'
              name="id"
              value={state.id}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              placeholder='Input message writer'
              name="writer"
              value={state.writer}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              placeholder='Input movie genre'
              name="message"
              value={state.message}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              type="date"
              name="writeDate"
              value={state.writeDate}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Add Message</button>

        </div>
      </>
    </div>
    
  )
}

export default App;
