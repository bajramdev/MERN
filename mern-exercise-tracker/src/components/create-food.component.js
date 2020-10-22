import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFood extends Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); //binding
        this.onChangeMeal = this.onChangeMeal.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            meal: '',
            food: '',
            calories: 0,
            users: [],
            meals: ['Breakfast', 'Lunch', 'Dinner']
        }


    }

    componentDidMount() { //will be called before anything desplays on page

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
                        //meals: response.data.map(mealType => mealType.meal),
                        username: response.data[0].username
                    })
                }
            })
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeMeal(e){
        this.setState({
            meal: e.target.value});
        console.log(e.target.value);
    }

    onChangeFood(e){
        this.setState({
            food: e.target.value,
        });
    }

    onChangeCalories(e) {
        this.setState({ calories: e.target.value});
        console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();

        const food = {
            username: this.state.username,
            meal: this.state.meal,
            food: this.state.food,
            calories: this.state.calories
        }
        console.log(food);

        axios.post('http://localhost:5000/foods/add' , food)
            .then(res => console.log(res.data));
        //  console.log(this.target.value);
        console.log(e.target.value);
    }

    render(){
        return(
            <div>
                <h3>Create New Food</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref ="userInput"

                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>
                            })
                        }
                    </select>
                </div>
                    <div className="form-group">
                        <label>Meal: </label>
                        <select ref="meal_input"
                                className="form-control"
                                value={this.state.meal}
                                onChange={this.onChangeMeal}>
                            {
                                this.state.meals.map(list => (
                                    <option key={list} value={list}>
                                        {list}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Food: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.food}
                            onChange={this.onChangeFood}
                        />
                    </div>
                    <div className="form-group">
                        <label>Calories: </label>
                        <div>
                            <input
                                name="calories"
                                className="form-control"
                                value={this.state.calories}
                                onChange={this.onChangeCalories}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Food" className="btn btn-primary"/>
                    </div>
                </form>

            </div>
        )
    }
}