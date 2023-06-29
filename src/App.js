// edit, delete, side bar(left, with all title), 
import logo from './logo.svg';
import './App.css';
import Create from './components/Create'
import PageListing from './components/PageListing';
import Page from './components/Page'
import Editor_2 from './components/Editor_2';
import { useEffect, useState } from "react";
import { act } from 'react-dom/test-utils';

  let x = localStorage.getItem('index_array')
  x = JSON.parse(x)
function App() {
  const[stage,mutStage] = useState("None")
  if(localStorage.getItem('index_array') == null){
    localStorage.setItem('index_array',JSON.stringify([]))  // if there is no book keep, then add one
  }

  const [show_create, setShowcreate] = useState(false)
  const Clicked = () => setShowcreate(!show_create)

  const [show_Edit, setShowEdit] = useState(false)
  const Clicking = () => setShowEdit(!show_Edit)

  const [show_Editor, setShowEditor] = useState(false)
  const Click = () => setShowEditor(!show_Editor)

  function text_grabber(name){
    if(name != "None" && name != null){
      console.log(stage)
      let actual_text = JSON.parse(localStorage.getItem(name));
      actual_text = actual_text.text
      return actual_text;
      }
    if(name == null){
      return "  "
    }
  }
  function title_grabber(name){
    if(name != "None" && name != null){
      return name;
      }
    if(name == null){
      return "  "
    }
  }

  return (
    <>
    <div>
      <input type="submit" value="Add note" onClick={Clicked} />
      { show_create ? <Create /> : null }
    </div>
    <div>
      <PageListing list = {x} Stager={stage=>mutStage(stage)}/>
    </div>
    <h1>Title : {stage}</h1>
    <h2>Text : {text_grabber(stage)}</h2>
    <div>
      <input type="submit" value="Display note" onClick={Clicked} />
      { show_Edit ? <Page title={stage} Text={text_grabber(stage)} /> : null }
    </div>
    <input type="submit" value="Edit note" onClick={Click} />
      { show_Editor ? <Editor_2 title={title_grabber(stage)} text = {text_grabber(stage)}/> : null }
    </>
  );
}

export default App;
