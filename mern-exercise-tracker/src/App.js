import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateFood from "./components/create-food.component";
import EditFood from "./components/edit-food.component";
import FoodList from "./components/meal-plan.component";


function App() {
    return (
        <Router>
            <div className="container">
             <Navbar />
                <br/>
                <Route path="/" exact component={ExercisesList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
                <Route path="/food" component={CreateFood} />
                <Route path="/edite/:id" component={EditFood} />
                <Route path="/mealPlan" component={FoodList} />
            </div>
        </Router>
    );
}

export default App;