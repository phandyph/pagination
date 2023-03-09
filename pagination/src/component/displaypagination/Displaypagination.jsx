import './Displaypagination.css';

const Displaypagination = ({
    fivePages,
    onClickCurrentPage,
    onClickPreviousPage,
    onClickNextPage,
    currentPage
}) => {
    return (
        <div>
            <div className='paginate'>
                <button className='pagi' disabled={currentPage === 0} onClick={()=>onClickPreviousPage(currentPage-1)}>{'<'}</button>
                {fivePages.map((page,i)=>{
                    return (
                        <div className="pages" key={i}>
                            <div onClick={()=>onClickCurrentPage(page)} style={{color: currentPage===page? 'blue':'black'}}  className='pagi'>{page+1}</div>
                        </div>
                    )
                })}            
                <button className='pagi' disabled={currentPage === 4} onClick={()=>onClickNextPage(currentPage+1)}>{'>'}</button>
            </div>
        </div>
    )
}

export default Displaypagination;