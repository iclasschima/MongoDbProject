import React from 'react';
// import Login from "./components/Login"
import Navbar from "./components/Navbar"
import ExerciseList from "./components/ExerciseList"
import CreateUser from "./components/CreateUser"
import CreateExercise from "./components/CreateExercise"
import EditExercise from "./components/EditExercise"
import {BrowserRouter, Route} from "react-router-dom"

// function Jumbotron () {
//   return (
//       <div className="jumbotron text-center">
//           <h4>Landing Page</h4>
//       </div>
//   )
// }

function App() {

  return (
    <BrowserRouter>
      <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}


export default App;
