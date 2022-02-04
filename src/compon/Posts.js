import React from "react";
import { useState, useMemo } from "react";
import "./Posts.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import {FaImage, FaLaptopCode, FaCocktail, FaCartArrowDown} from "react-icons/fa";


const Posts = () => {
  const [valueInput, setValueInput] = useState("New Ticket");
  const [newPost, setNewPost] = useState({});
  const [value, setValue] = useState("Shop");
  const [image, setImage] = useState(<FaCartArrowDown className="image"/>); 
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaCocktail className="image"/>,
      listName: "Rest",
      description: "Walk 7 km",
    },

    {
      id: uuidv4(),
      image: <FaCartArrowDown className="image"/>,
      listName: "Shop",
      description: "Buy Orange",
    },
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image"/>,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaImage className="image"/>,
      listName: "Test",
      description: "Test task",
    },
  ]);

  function remove(props) {
    console.log("remove function");
    const afterFilter = posts.filter((val) => val.id !== props.postId);
    setPosts(afterFilter);
  }
  function onChangeSel(event) {
    setValue(event.target.value);
     if(value === "Shop"){
    setImage (<FaCartArrowDown className="image"/>);
    console.log("shop")
     }
     else if(value === "Tech"){
      setImage (<FaLaptopCode className="image"/>);
      console.log("tech")
     }
     else if(value === "Rest"){
      setImage (<FaCocktail className="image"/>);
      console.log("rest")
     }
   
  }
  function changInp(event) {
    event.stopPropagation();
    setValueInput(event.target.value);
  }
  function Add() {
    setNewPost({});
    setPosts([
      ...posts,
      { ...newPost, id: uuidv4(),image : image ,listName: value, description: valueInput },
    ]);
    
  }
  useMemo(() => {
    console.log("cashing");
  }, []);

  return (
    <div className="Posts">
      <h1>
      Golden Tickets</h1>
      {posts.length ? (
        <div>
          {posts.map((item) => (
            <Task
              image = {item.image}
              key={item.id}
              remove={remove}
              listName={item.listName}
              postId={item.id}
              description={item.description}
            />
          ))}
        </div>
      ) : (
        <div className="noTasks">Add Your First Ticket</div>
      )}
      <Input
        value={valueInput}
        className="input"
        type="text"
        placeholder="New Ticket"
        onChange={changInp}
      />
      <Select className="select" onChange={onChangeSel}/>
      <Button onClick={Add} className="buttonAdd" type="text" />
      <h6 className="messageBottom">You have<mark className="mark"> {posts.length} </mark>tickets totally</h6>
    </div>
  );
};

export default Posts;
