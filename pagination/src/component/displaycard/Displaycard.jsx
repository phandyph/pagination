import './Displaycard.css';
const Displaycard = ({
    twoUsers,
    seeDetail,
    detailPage
}) => {
    return (
        <div className="pagin-card">
            {twoUsers.map((d,i)=>{
                return (
                    <div key={d.id} onClick={() => seeDetail(d.id)}>
                        <div style={{border: detailPage===d.id? '1px solid blue':'1px solid black'}} className="mt-4 p-2 card">
                            <p>{d.id}</p>
                            <p>{d.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Displaycard;