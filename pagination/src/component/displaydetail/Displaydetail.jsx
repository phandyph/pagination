import './Displaydetail.css';

const Displaydetail = ({userDetail}) => {
    return (
        <div className='pagin-res'>
                <p>{userDetail.id}</p>
                <p>{userDetail.username}</p>
                <p>{userDetail.email}</p>
        </div>
    )
}

export default Displaydetail;