import {TwoWay, useState} from 'react'
//su dung useState
const gifts=[
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard',
]

//Response from api
const courses = [
  {
    id:1,
    name: 'HTML,CSS'
  },
  {
    id:2,
    name: 'javascrip'
  },
  {
    id:3,
    name: 'react js'
  }
]

function TwoWays() {
  const [gift,setGift] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const randomGift = () =>{
      const index = Math.floor(Math.random() * gifts.length)

      setGift(gifts[index])
  }
  const [checked, setChecked] = useState([])

  const handleCheck = (id )=>{
    setChecked(prev =>{

      const isChecked = checked.includes(id)
      if(isChecked){
        //Uncheck
        return checked.filter(item => item !== id)
      }else{
        return[...prev,id]
      }
    })
  }
  const handleSubmit = () =>{
    //call api
    console.log({idS: checked});

}

  return (
    <div style={{padding: 32 }}>
      <h1>{gift || 'Chưa có gì cả'}</h1>
      <button onClick={randomGift}> Update</button>

      {/* vidu1 */}
      <div style={{padding: 32 }}>
        <input
        value={name}
        onChange ={e => setName(e.target.value)}
        />

        <input
        value={email}
        onChange ={e => setEmail(e.target.value)}
        />
          <button onClick={handleSubmit}> Register</button>  
      </div>

      {/* vidu2 */}
      <div style={{padding: 32 }}>
        {courses.map(courses =>(
          <div key = {courses.id}>
              <input 
                // type="radio" 
                type="checkbox" 
                checked = {checked.includes(courses.id)}
                onChange={() => handleCheck(courses.id)}
              />
              {courses.name}
          </div>
        ))}
          <button onClick={handleSubmit}> Register</button>  
      </div>
      </div>
  );
}

export default TwoWays;
