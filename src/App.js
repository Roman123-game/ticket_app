import React from "react";
import { useState, useMemo, useRef } from "react";
import "./App.css";
 import { v4 as uuidv4 } from "uuid";
import Task from "./compon/Task";

function App() {

  const bodyInput = useRef('');
  const [newPost, setNewPost] = useState({});
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      listName: "Tech",
      description: "Learn Redux",
    },
    {
      id:uuidv4(),
      listName: "Shop",
      description: "Buy Sugar",
    }, 
    {
      id:uuidv4(),
      listName: "Shop",
      description: "Buy Milk",
    },
    {
      id: uuidv4(),
      listName: "Rest",
      description: "Go Piknik",
    },
  ]);
  function remove( props) {
    console.log("remove function");  
    const afterFilter =  posts.filter(val => val.id !== props.postId);
    console.log(afterFilter);
    setPosts(afterFilter);
  }
  function Add() {
    setNewPost({});
    setPosts([
      ...posts,
      { ...newPost, id: uuidv4(), listName: value, description: bodyInput.current.value},
    ]);
  }

  useMemo(() => {
  return {...posts};
  }, [posts]);
  return (
    <div className="App">
      Ultimate Todo
      <div>
        {posts.map((item) => (
          <Task
            remove={remove}
            key={item.id}
            listName={item.listName}
            postId={item.id}
            description={item.description}
          ></Task>
        ))}
      </div>
      <input
        ref={bodyInput}
        id="input"
        className="input"
        type="text"
        placeholder="New Task"
      ></input>
      <select className="select" onChange={(event) => setValue(event.target.value)}>
        <option value1="Shop">Shop</option>
        <option value1="Tech">Tech</option>
        <option value1="Rest">Rest</option>
      </select>
      <button onClick={Add} className="buttonAdd" type="text">&#x2BA0;
     
      </button>
    </div>
  );
}
export default App;
