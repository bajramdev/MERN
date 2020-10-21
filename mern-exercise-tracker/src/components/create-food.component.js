import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFood extends Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); //binding
        this.onChageMeal = this.onChageMeal.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            meal: '',
            food: '',
            calories: 0
        }

    }

    componentDidMount() { //will be called before anything desplays on page

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
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

    onChageMeal(e){
        this.setState({
            meal: e.target.value
        });
    }

    onChangeFood(e){
        this.setState({
            food: e.target.value
        });
    }

    onChangeCalories(e) {
        this.setState({
            calories: e.target.value
        })
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

        axios.post('http://localhost:5000/food/add' , food)
            .then(res => console.log(res.data));
    }

    render(){
        return(
            <div>
                <h3>Create New Food</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">



                </div>
                </form>

            </div>
        )
    }
}