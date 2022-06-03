import {Todolist, useState} from 'react'
//su dung useState

function Todolists() {
 // chuyen sang chuoi json

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? [] //toan tu khi storageJobs undefined thi no moi lay []
  })    
  

  const handleSubmit = () =>{
      setJobs(prev =>{
          const newJobs = [...prev, job]

          // save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJobs)
            
          return newJobs
      })
      setJob('')
  }

  

  return (
    <div style={{padding: 32 }}>
      <input value={job} onChange ={e => setJob(e.target.value)} />
           <button onClick={handleSubmit}>Add</button>

           <ul>
               {jobs.map((job, index) => (
                   <li key = {index}> {job}</li>
               ))}
           </ul>
      </div>
  );
}

export default Todolists;
