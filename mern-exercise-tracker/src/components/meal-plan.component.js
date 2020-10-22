import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Food = props => ( //functional react component
    <tr>
        <td>{props.food.username}</td>
        <td>{props.food.meal}</td>
        <td>{props.food.food}</td>
        <td>{props.food.calories}</td>
        <td>
            <Link to={"/edit/"+props.food._id}>edit</Link> | <a href="#" onClick={() => {props.deleteFood(props.food._id)}}>delete</a>
        </td>

    </tr>
//change link to button


)

    export default class FoodList extends Component { //class component
    constructor(props) {
        super(props);

        this.deleteFood = this.deleteFood.bind(this);

        this.state = {mealPlan: []}
    }


    componentDidMount() {
        axios.get('http://localhost:5000/mealPlan/')
            .then(response => {
                this.setState({mealPlan: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }


        deleteFood(id){
        axios.delete('http://localhost:500/mealPlan/'+id)
            .then(res => console.log(res.data))

        this.setState({
            mealPlan: this.state.mealPlan.filter(el => el._id !== id)
        })
    }


    foodList(){
        return this.state.mealPlan.map(currentfood => {
            return <Food food={currentfood} deleteFood={this.deleteFood()} key={currentfood._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h3>Logged Meal Plan</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Meal</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.foodList()}
                    </tbody>
                </table>
            </div>
        )
    }
}