import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFood extends Component{

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChageMeal = this.onChageMeal.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);

        this.state = {
            username: '',
            meal: '',
            food: '',
            calories: 0,
            

        }

    }






}