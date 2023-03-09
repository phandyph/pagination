import { useState, useEffect } from "react";
import './Parent.css';
const URL = 'https://jsonplaceholder.typicode.com/users';

const Parent = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    /**
     * Fetch data from URL of users (contain 10 objects.)
     */
    useEffect(()=>{
        fetch(URL)
        .then(res=>{
            return res.json()
        })
        .then(datas=>{
            setLoading(false)
            setUsers(datas)
        })
    }, [])


    return (
        <div>Parent Component</div>
    )
}

export default Parent;
