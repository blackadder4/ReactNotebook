import { useEffect, useState } from "react";
// list all items in storage
// this will just show button of all index array
const PageListing = ({list,Stager}) => {
    const [value, setValue] = useState(1);
    const [notes, setNotes] = useState(list)
    const change_list = () =>{
        setNotes(JSON.stringify(localStorage.getItem("index_array")));
        console.log('setNotes');
    } 
    let G = list.map((title)=> <button className="Page-List_items" key={title.toString()} onClick={()=>{change_stage(title)}}>{title}</button>);
    
    function redo(){
        (JSON.stringify(localStorage.getItem("index_array")));
        //G = newList.map((title)=> <button onClick={()=>{change_stage(title)}}>{title}</button>);
    }
    //const[G,reload] = useState(G);
    const [stage,setStage] = useState("None");
    function change_stage(title){
        setStage(title);
        Stager(title);
    }
    //useEffect(()=>{redo()},[list])
    const [show_Del, setShowDel] = useState(false)
    const deling = () => setShowDel(true)

    function kill(id){
        localStorage.removeItem(id);  // kill this item from local storage
        let temp = localStorage.getItem('index_array')
        temp = JSON.parse(temp)
        temp.splice(temp.indexOf(id),1)
        localStorage.setItem('index_array',JSON.stringify(temp))
        temp = localStorage.getItem('index_array')
        list = temp;
        change_list();
        window.location.reload();   // my hooks somehow broke so I gotta break the react rules a bit and do this I guess
    }

    return (
        <span className="Page-List">
        <h1>Currently selected : {stage}</h1>
        <div className="PageList">
            {G}
        </div>
        <input type="submit" value="Delete?" onClick={deling} />
      { show_Del ? <button onClick={()=>kill(stage)}>Delete current page?</button> : null }
        </span>
    );
}
 
export default PageListing;
