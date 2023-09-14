import { useEffect, useState } from "react";

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("Mount");
    }, [])

    useEffect(()=> {
        console.log("update!!")
    })

    useEffect(()=>{
        console.log("UpMount!")
        return () => {
            // UpMount 시점에 실행됨
        }
    }, [])

    useEffect(()=>{
        console.log(`count is updated : ${count}`)
        if(count > 5){
            alert("count가 5를 넘었어요. 1로 초기화합니다.")
            setCount(1);
        }
    },[count])

    useEffect(()=>{
        console.log(`count is updated : ${text}`)
    },[text])

    return (
        <div style={{padding:20}}>
            <div>
                {count}
                <button onClick={()=> {setCount(count + 1)}}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e)=> {setText(e.target.value)}}/>
            </div>
        </div>
    )
}

export default LifeCycle