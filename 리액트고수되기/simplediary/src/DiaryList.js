import DiaryItem from "./DiaryItem"

const DiaryList = ({onEdit, onRemove, diaryList})=> {
    console.log(diaryList)
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map((it, idx)=>(
                        <DiaryItem key={it.id} {...it} onRemove = {onRemove} onEdit = {onEdit}/> //props 전달하는 또 다른방법
                    ))
                }
            </div>
        </div>
    )  
}

DiaryList.defaultProps= {
    diaryList:[]
}

export default DiaryList;