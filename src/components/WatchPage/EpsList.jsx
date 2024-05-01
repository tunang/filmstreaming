const EpsList = ({eps,currentEp, handleSetCurrentEp}) => {
    // console.log(eps.data.episodes[currentEp].server_data[currentEp].index);
    return (<div className="col-start-6 col-end-8  ">
        <h2 className="text-quinary border-b-2 border-quinary">Episodes</h2>
        <div className="grid grid-cols-5 pt-4 text-center">
            {eps.data.episodes[0].server_data.map((ep, index) => {
                return <p onClick={() => handleSetCurrentEp(index)} className="text-center text-quinary leading-6 w-14 mr-1 mt-2 rounded border-2 border-quinary overflow-hidden cursor-pointer hover:bg-tertiary " key={index}>{index + 1}</p>
            })}
        </div> 

    </div>
    ) 
}
 
export default EpsList;