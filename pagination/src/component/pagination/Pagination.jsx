import { useState, useEffect } from "react";
import Displaypagination from "../displaypagination/Displaypagination";
import Displaycard from "../displaycard/Displaycard";
import Displaydetail from "../displaydetail/Displaydetail";
import './Pagination.css';
const URL = 'https://jsonplaceholder.typicode.com/users';

const Pagination = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    const fivePages = Array.from(Array(users.length/2).keys())
    const [currentPage, setCurrentPage] = useState('');
    const [twoItems, setTwoItems] = useState([]);
    const [userDetail, setUserDetail] = useState({});
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
        setTwoItems([users[para*2], users[para*2+1]])
        setUserDetail({})
    }

    const onClickPreviousPage = (para) => {
        setCurrentPage(para)
        setTwoItems([users[para*2], users[para*2+1]])
        setUserDetail({})

    }

    const onClickNextPage = (para) => {
        setCurrentPage(para)
        setTwoItems([users[para*2], users[para*2+1]])
        setUserDetail({})
    }


    const seeDetail = (id) => {
        twoItems.forEach((d)=>{
            if (d.id === id) {
                setUserDetail(d)
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
                    twoItems={twoItems}
                    seeDetail={seeDetail}
                    detailPage={detailPage}
                />

                <Displaydetail
                    userDetail={userDetail}
                />
            </div>
        </div>
    )
}

export default Pagination;
