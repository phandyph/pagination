import './Displaydetail.css';

const Displaydetail = ({resDetail}) => {
    return (
        <div className='pagin-res'>
                <p>{resDetail.id}</p>
                <p>{resDetail.username}</p>
                <p>{resDetail.email}</p>
        </div>
    )
}

export default Displaydetail;