import Page from "./Page";
import Create from "./Create";
import {useEffect } from "react";

//supply a title and the editor will open it if it is in the index_array
// if there is no title supplied it will take default value of none
// honestly don't see any need for 500ms, when I can just save on close everytime.
//either show and edit page, add page or delete page

useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', handleTabClosing)
    return () => {
        window.removeEventListener('beforeunload', alertUser)
        window.removeEventListener('unload', handleTabClosing)
    }
})

const handleTabClosing = () => {
    removePlayerFromGame()
}

const alertUser = (event:any) => {
    event.preventDefault()
    event.returnValue = ''
}


function Editor({title}) {
    let x = localStorage.getItem('index_array')
        x = JSON.parse(x)
        if(!x.includes({title})){  // if title is not found in book keep
            x.push(title)
            localStorage.setItem('index_array', JSON.stringify(x))
            return(<div><Create/></div>)   //return a creation page
        }
        else{ // if title is in bookkeep
            //fetch the data and make a page
            let y = localStorage.getItem(title);
            y = JSON.parse(y);
            return(<div> <Page title= {y.title} text= {y.text} /></div>)
        }
}
Editor.defaultProps = {
    title:"none",
    save:false
  }

export default Editor;