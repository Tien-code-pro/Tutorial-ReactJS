import {useState} from 'react'
//su dung useState
import Content from './Content'

function MountedAndUnmounteds() {
const [show, setShow] = useState(false)
  

  return (
    <div style={{padding: 32 }}>
        <button onClick={()=> setShow(!show)}>Toggle</button>
        {show && <Content/>}
      </div>
  );
}

export default MountedAndUnmounteds;
