export default function Contact(){
    return(
        <>
        <h1> contact us </h1>
        <div className=" w-52 h-44 flex bg-gray-700 m-10">
        <form>
            <input className="border border-black p-1 m-2" type="text" placeholder="name"/>
            <input className="border border-black p-1 m-2" type="text" placeholder="message"/>
            <button className="bg-slate-400 rounded p-2 m-2 ml-14">Submit</button>
        </form>

        </div>
      
        </>
    )
}