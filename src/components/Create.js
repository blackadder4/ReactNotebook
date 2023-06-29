import { useEffect, useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('');
    const [text,setBody] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(title)
        //console.log(text)
        let page = {"title": title, "text": text}
        let dest = title;
        //console.log(page)
        if(title == ''){
            page = {"title": "Untitled", "text": text};
            dest = "Untitled"    
        }   // if no title then title = untitled
        localStorage.setItem(title,JSON.stringify(page))   ///add the page to the db, add the title to the index array
        let x = localStorage.getItem('index_array')
        x = JSON.parse(x)
        if(!x.includes(title)){  // if title is not found in book keep
            x.push(title)
            localStorage.setItem('index_array', JSON.stringify(x))
        }   // if title not in the book keep push title into book keep
        //localStorage.setItem(dest, JSON.stringify(x))
    }
    return (
        <div className="create">
            <h2>Add a new note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note title : </label>
                <input
                    type= "text"
                    //required
                    defaultValue="Untitled"
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    />
                <label>Note Body :</label>
                <textarea
                    required
                    defaultValue="no text"
                    value = {text}
                    onChange = {(e) => setBody(e.target.value)}
                    ></textarea>
                <input type= "submit" value = "Submit" />
            </form>
            </div>
    );
}
export default Create;