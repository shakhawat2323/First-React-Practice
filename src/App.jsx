import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./todo";
import "./App.css";
import Actor from "./actor";
import Abal from "./abal";
import Books from "../Bookstor";

function App() {
  const actors = ["akhas", "gonesh", "shiam"];
  const abal = [
    { name: "rasel", age: 23 },
    { name: "rakib", age: 21 },
    { name: "chika", age: 25 },
  ];
  const allbooks = [
    { id: 1, name: "math", price: 230 },
    { id: 2, name: "bangla", price: 240 },
    { id: 3, name: "English", price: 250 },
    { id: 4, name: "pheycs", price: 300 },
  ];

  return (
    <>
      <Books allbooks={allbooks}></Books>
      {abal.map((abals) => (
        <Abal abals={abals}></Abal>
      ))}
      <Actor name="  Baparaz"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo taks="leren React"></Todo>
      <Todo isDone="explor Task"></Todo>
      <Divase name="laptop" price="35000"></Divase>
      <Divase name="mobile" price="1000"></Divase>
      <Divase name="wach" price="7000"></Divase>
      <Student></Student>
      <Student></Student>

      <Newstudent grade="7" score="93"></Newstudent>
      <Newstudent></Newstudent>
      <Newstudent></Newstudent>
      <Newstudent></Newstudent> */}
    </>
  );
}

function Student() {
  const name = "shakhawat";
  const age = 21;
  const person = { name: "nilima", age: 21 };
  return (
    <div className="student">
      <h3>
        amar name : {person.name} amar age :{person.age}{" "}
      </h3>
    </div>
  );
}

function Divase(props) {
  console.log(props);
  return (
    <h2>
      My Divaise :{props.name} price : {props.price}
    </h2>
  );
}
const { grade, score } = { grade: "7", score: "93" };
function Newstudent({ grade = 4, score = 0 }) {
  const styledevoloper = {
    border: "2px solid red",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={styledevoloper}>
      <h1>i am a bad student</h1>
      <h2>Class : {grade}</h2>
      <h3>Score : {score}</h3>
    </div>
  );
}
export default App;
