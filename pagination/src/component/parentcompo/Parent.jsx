import { useState, useEffect } from "react";
import Displaypagination from "../displaypagination/Displaypagination";
import Displaycard from "../displaycard/Displaycard";
import Displaydetail from "../displaydetail/Displaydetail";
import './Parent.css';
const URL = 'https://jsonplaceholder.typicode.com/users';

const Parent = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    const fivePages = Array.from(Array(users.length/2).keys())
    const [currentPage, setCurrentPage] = useState('');
    const [twoUsers, setTwoUsers] = useState([]);
    const [resDetail, setResDetail] = useState({});
    const [detailPage, setDetailPage] = useState('')

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
        setResDetail({})
    }

    const onClickPreviousPage = (para) => {
        setCurrentPage(para)
        setTwoUsers([users[para*2], users[para*2+1]])
        setResDetail({})

    }

    const onClickNextPage = (para) => {
        setCurrentPage(para)
        setTwoUsers([users[para*2], users[para*2+1]])
        setResDetail({})
    }


    const seeDetail = (id) => {
        twoUsers.forEach((d)=>{
            if (d.id === id) {
                setResDetail(d)
                setDetailPage(d.id)
            }
        })
    }

    return (
        <div className="new-paginate">
            <Displaypagination 
                fivePages={fivePages}
                onClickCurrentPage={onClickCurrentPage}
                onClickPreviousPage={onClickPreviousPage}
                onClickNextPage={onClickNextPage}
                currentPage={currentPage}
            />
            <div className="child-pagin">
                <Displaycard
                    twoUsers={twoUsers}
                    seeDetail={seeDetail}
                    detailPage={detailPage}
                />

                <Displaydetail
                    resDetail={resDetail}
                />
            </div>
        </div>
    )
}

export default Parent;
