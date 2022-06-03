import {useEffect, useState} from 'react'
// Side effects
//1. useEffect(callback)
// - gọi callback mỗi khi component re-render 
// - gọi callback sau khi component thêm element vào DOM 
//2. useEffect(callback, [])
//-chỉ gọi callback 1 lần sau khi component amounted
//3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi
// ---------------------
//1. callback luôn được gọi sau khi component mounted


const tabs = ['posts' ,'comments', 'albums']

function Content(){
// const [title,setTitle] = useState('')
const [type,setType] = useState('posts')
const [posts,setPosts] = useState([])
const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(()=>{
        // document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`) 
        .then(res => res.json())
        .then(posts =>{
            setPosts(posts)
        })
    }, [type])
 
    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY >= 200){
                //show
                setShowGoToTop(true)
                
            }else{
                //hidden
                setShowGoToTop(false)
            }
            //setShowGoToTop(window.scrolly >= 200))
        }
        window.addEventListener('scroll', handleScroll)
        //cleanup funciton
        return() =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //vidu kick co man hinh
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(() =>{
        const handleResize =() =>{
            setWidth (window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return() =>{
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key = {tab}
                    style = {type === tab ? {
                        color: '#fff',
                        backgroundColor :'#333'
                    } : {} }
                    onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {posts.map(post =>(
                <li key = {post.id}>{post.title || post.name}</li>
            ))}
           
            {showGoToTop && (
                <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}
                >
                    Go to Top
                </button>
            )}

            <h1>{width}</h1> {/* vidu kick co man hinh */}
        </div>
    )
}
export default Content