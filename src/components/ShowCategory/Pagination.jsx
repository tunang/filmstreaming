const Pagination = ({currentPage, totalPage, paginate, handleDecreaseClick, handleIncreaseClick}) => {
    const pageNumber = [];

    for(let i = currentPage; i <= currentPage + 4 ; i++){
        pageNumber.push(i);
    }

    return ( 
        <ul className="flex justify-center col-span-4">
            <li onClick={() => handleDecreaseClick()} className="hover:bg-tertiary text-white text-center text-2xl leading-9 w-9 mx-1 cursor-pointer rounded-full">
            &#8678;           
            </li>
            {pageNumber.map((number) => {
                return <li
                className={`hover:bg-tertiary text-white text-center text-2xl leading-9 w-9 mx-1 ${currentPage === (number) ? 'active' : ''} cursor-pointer rounded-full`}
                    onClick={() => paginate(number)}
                    key={number}
                >{number}</li>
            })}
            <li onClick={() => handleIncreaseClick()} className={`hover:bg-tertiary text-white text-center text-2xl leading-9 w-9 mx-1 cursor-pointer rounded-full`}>
            &#8680;              
            </li>
        </ul>
     );
}
 
export default Pagination;