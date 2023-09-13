import './App.css';
import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import data from './data.js';

function App() {
  const [friend, setFriend] = useState(data);
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    hobby: '',
    birthday: ''
  });

  const { id, name, hobby, birthday } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onAddFriend = () => {
    const newFriend = {
      id: id,
      name: name,
      hobby: hobby,
      birthday: birthday
    };

    const updatedFriends = [...friend, newFriend];
    setFriend(updatedFriends);
    setInputs({
      id: '',
      name: '',
      hobby: '',
      birthday: ''
    });
  };

  const onDeleteFriend = (index) => {
    const updatedFriends = friend.filter((_, i) => i !== index);
    setFriend(updatedFriends);
  };

  return (
    <div className='addJjack'>
      <h1>내 짝꿍!</h1>
      <Link to="/add">친구 추가 /</Link>
      <Link to="/"> 메인으로 가기 </Link>
      
      <Routes>
        <Route path="/add" element={<AddFriendsSection onAddFriend={onAddFriend} onChange={onChange} inputs={inputs} />} />
        <Route path="/" element={<MainPageTable friend={friend} onDeleteFriend={onDeleteFriend} />} />
      </Routes>
    </div>
  );
}

function AddFriendsSection({ onAddFriend, onChange, inputs }) {
  return (
    <div>
      <h4>친구 추가</h4>
      번호: <input name="id" onChange={onChange} value={inputs.id} /> <br />
      이름: <input name="name" onChange={onChange} value={inputs.name} /> <br />
      취미: <input name="hobby" onChange={onChange} value={inputs.hobby} /> <br />
      생일: <input type='date' name="birthday" onChange={onChange} value={inputs.birthday} /> <br />
      <button onClick={onAddFriend}>추가</button>
    </div>
  );
}

function MainPageTable({ friend, onDeleteFriend }) {
  return (
    <div>
      <br/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>취미</th>
            <th>생일</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {friend.map((friend, index) => (
            <Friend key={index} friend={friend} onDelete={() => onDeleteFriend(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Friend(props) {
  return (
    <tr>
      <td>{props.friend.id}</td>
      <td>{props.friend.name}</td>
      <td>{props.friend.hobby}</td>
      <td>{props.friend.birthday}</td>
      <td>
        <button onClick={props.onDelete}>삭제</button>
      </td>
    </tr>
  );
}

export default App;
