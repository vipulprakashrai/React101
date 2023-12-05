const Submenu = ({data, title}) =>{
    
    return(
        <div>
          <h1>{title}</h1>
          {data.map((item) => {
            return <div key={item.card.info.id}>{item.card.info.name}</div>
          })}
        </div>
    )
}
export default Submenu;