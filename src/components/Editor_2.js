
import { useRef,useEffect,useReducer } from 'react';
  
function Editor_2({title,text}) {
  const inputRef = useRef(null);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

useEffect(() => {
    forceUpdate()
    console.log("out of time")
  }, [title]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(title)
    //console.log(text)
    let page = {"title": title, "text": inputRef.current.value}
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
    <div className="Editor_2">
      <h3>Edit</h3>
      <form onSubmit={handleSubmit}>
        <span className='text_box_title'>
        <label>New Title :</label>
        <input type="text" name="Title" defaultValue="Please insert the new title here" ref={inputRef} />
        </span>

        <label>New Text :</label>
        <input type="text" name="Text" defaultValue={text} ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  
export default Editor_2;