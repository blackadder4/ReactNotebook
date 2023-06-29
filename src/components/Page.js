import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
// this is for display only all data will be stored in json
// <Page title= text= />

const Page = ({title, text}) => {
    const [new_title,setTitle] = useState('');
    const [new_text,setBody] = useState('');

    function self_destruct(id){
        localStorage.removeItem(id);  // kill this item from local storage
        let x = localStorage.getItem('index_array')
        x = JSON.parse(x)
        x.splice(x.indexOf(id),1)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(title)
        //console.log(text)
        if(new_text != '' && new_title != ''){
        let change = {"title": new_title, "text": new_text}
        let dest = title;   // old title is where you save
        //console.log(page)
        // if no title then title = untitled
        localStorage.setItem(title,JSON.stringify(change))   ///add the page to the db, add the title to the index array
        let x = localStorage.getItem('index_array')
        x = JSON.parse(x)
        console.log(change)
        if(!x.includes(title)){  // if title is not found in book keep
            x.push(title)
            localStorage.setItem('index_array', JSON.stringify(x))
        }   // if title not in the book keep push title into book keep
        //localStorage.setItem(dest, JSON.stringify(x))
    }

	return (
		<div className="Page">
            <form onSubmit={handleSubmit}>
                <label>Note title : </label>
                <input
                    type= "text"
                    //required
                    defaultValue={title}
                    //value={new_title}
                    onChange = {(e) => setTitle(e.target.value)}
                    />
                <label>Note Body :</label>
                <textarea
                    required
                    defaultValue={text}
                    //value = {new_text}
                    onChange = {(e) => setBody(e.target.value)}
                    ></textarea>
                <input type= "submit" value = "Submit" />
            </form>
            </div>
	);
    }
};

Page.defaultProps = {
    title: "No title",
    text: "None"
}

export default Page;