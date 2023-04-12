import { useSelector } from "react-redux"



export default function Home() {
    const userName = useSelector(state => state.user.user.name);
    return (<div>
    <h1>Home</h1>
    <p>Welcome {userName}</p>    
    <p>Super cool application for creating and storing contacts. It won't be better</p>
    </div>)
} 