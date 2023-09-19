/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import data from './data.js';

function App() {
  const [friends, setFriends] = useState(data);
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    hobby: '',
    birthday: ''
  });

  const { id, name, hobby, birthday } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  const onAddFriend = () => {
    const newFriend = {
      id: id,
      name: name,
      hobby: hobby,
      birthday: birthday
    };

    const updatedFriends = [...friends, newFriend];
    setFriends(updatedFriends);
    setInputs({
      id: '',
      name: '',
      hobby: '',
      birthday: ''
    });
  };

  const onDeleteFriend = (id) => {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  };

  return (
    <div className='addJjack'>
      <h1>내 짝꿍!</h1>
      <Link to="/add">친구 추가 /</Link>
      <Link to="/"> 메인으로 가기 </Link>
      
      <Routes>
        <Route path="/add" element={<AddFriendsSection onAddFriend={onAddFriend} onChange={onChange} inputs={inputs} />} />
        <Route path="/" element={<MainPageTable friends={friends} onDeleteFriend={onDeleteFriend} />} />
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

function MainPageTable({ friends, onDeleteFriend }) {
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
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} onDeleteFriend={onDeleteFriend} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Friend({ friend, onDeleteFriend }) {
  return (
    <tr>
      <td>{friend.id}</td>
      <td>{friend.name}</td>
      <td>{friend.hobby}</td>
      <td>{friend.birthday}</td>
      <td>
        <button onClick={() => onDeleteFriend(friend.id)}>삭제</button>
      </td>
    </tr>
  );
}

export default App;
