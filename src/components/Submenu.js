const Submenu = ({data, title}) =>{
    
    return(
        <div className="">
            <h1>{title}</h1>
          {data.map((item) => {
            return <div>{item.card.info.name}</div>
          })}
        </div>
    )
}
export default Submenu;