import {useState} from 'react'
function useStates() {
  const [info,setInfo] = useState({
      name: 'Luong Minh Tien',
      age:18,
      address:'Ha Noi, VN'
  })
//set state là thay thế state bằng giá trị mới
  const handleUpdate = ()=>{
    //normal
      // setInfo({
      //   ...info,//them gia tri
      //     bio : ' love you ...!!!'
      // })

      //kiểu callback logic
      setInfo(prev =>({
           ...prev,//bảo lưu cái cũ
             bio : ' love you ...!!!'
         }))
  } 

  return (
    <div style={{padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}> Update</button>
    </div>
  );
}

export default useStates;
