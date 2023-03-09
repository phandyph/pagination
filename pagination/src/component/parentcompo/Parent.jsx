import { useState, useEffect } from "react";
import Displaypagination from "../displaypagination/Displaypagination";
import './Parent.css';
const URL = 'https://jsonplaceholder.typicode.com/users';

const Parent = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    const fivePages = Array.from(Array(users.length/2).keys())
    const [currentPage, setCurrentPage] = useState('');
    const [twoUsers, setTwoUsers] = useState([]);


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


    const onClickCurrentPage = (para) => {
        setCurrentPage(para)
        setTwoUsers([users[para*2], users[para*2+1]])

    }

    const onClickPreviousPage = (para) => {
        setCurrentPage(para)
        setTwoUsers([users[para*2], users[para*2+1]])

    }

    const onClickNextPage = (para) => {
        setCurrentPage(para)
        setTwoUsers([users[para*2], users[para*2+1]])
    }

    return (
        <div className="new-paginate">
            <Displaypagination 
                fivePages={fivePages}
                onClickCurrentPage={onClickCurrentPage}
                onClickPreviousPage={onClickPreviousPage}
                onClickNextPage={onClickNextPage}
                users={users}
                twoUsers={twoUsers}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Parent;
