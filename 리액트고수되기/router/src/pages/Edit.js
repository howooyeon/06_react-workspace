import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () =>{

    const nevigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log(id);

    const mode = searchParams.get('mode');
    console.log(mode);

    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정화면입니다.</p>
            <button onClick={() => {
                nevigate("/home")
            }}>HOME으로 가기</button>
            <button
                onClick={()=>{
                    nevigate(-1);
                }}
            >뒤로가기</button>
        </div>
    )
}

export default Edit;
