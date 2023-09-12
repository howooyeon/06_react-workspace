import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data.js';

function App() {
  const [friend, setFriend] = useState(data); // 친구 목록을 담는 상태 변수

  // 입력값을 관리하는 상태 변수 및 객체 비구조화 할당
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    hobby: '',
    birthday: ''
  });

  const { id, name, hobby, birthday } = inputs; // 입력값 추출

  // 입력값이 변경될 때 호출되는 함수
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // 친구 추가 로직을 처리하는 함수
  const onAddFriend = () => {
    // 입력값을 이용하여 새로운 친구 객체 생성
    const newFriend = {
      id: id,
      name: name,
      hobby: hobby,
      birthday: birthday
    };

    // 기존 친구 목록에 새로운 친구 추가
    const updatedFriends = [...friend, newFriend];

    // 상태를 업데이트하고 입력 필드를 초기화
    setFriend(updatedFriends);
    setInputs({
      id: '',
      name: '',
      hobby: '',
      birthday: ''
    });
  };

  return (
    <div className='addJjack'>
      친구 추가 <br/>
      번호 : <input name="id" onChange={onChange} value={id}/> <br/>
      이름 : <input name="name" onChange={onChange} value={name}/> <br/>
      취미 : <input name="hobby" onChange={onChange} value={hobby}/> <br/>
      생일 : <input type='date' name="birthday" onChange={onChange} value={birthday}/> <br/>
      <button onClick={onAddFriend}>추가</button>
      <div>
        <b>값: </b>
        {name} ({hobby})
      </div>
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
        <button onClick={() => props.onDelete(props.index)}> 삭제하기 </button>
      </td>
    </tr>
  );
}

export default App;
