const router = require('express').Router();
let Food = require('../models/food.model');


router.route('/').get((req,res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const meal = req.body.meal;
    const food = req.body.food;
    const calories = Number(req.body.calories);

    const newFood = new Food({
       username,
       meal,
       food,
        calories
    });
    newFood.save()
        .then(() => res.json('Food has been added!'))
        .catch(err => res.status(400).json("Error with 404 " + err ))

});

router.route('/:id').get((req,res ) => {
    Food.findById(req.params.id)
        .then(food => res.json(food))
        .catch(e => res.status(400).json('Error ' , e))
});

router.route('/:id').delete((req,res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(food => res.json('Food deleted'))
        .catch(e => res.status(400).json('error' , e))
})

router.route('/update/:id').post((req,res) => {

    Food.findById(req.params.idle)
        .then(food => {
            food.username = req.body.username;
            food.meal = req.body.meal;
            food.food = req.body.food;
            food.calories = Number(req.body.calories);

            food.save()
                .then(() => res.json('Food updated!'))
                .catch(e => res.status(400).json('Error', e));
        })
        .catch(err => res.status(400).json('Error: ' + err))

});


module.exports = router;