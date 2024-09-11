import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [...state, action.value]
        case 'REMOVE_CAR':
            //create a copy of state and then splice the index out of it
            let cars = [...state]
            cars.splice(action.value, 1)
            return cars
    }
    return state
}

export default combineReducers({ user, cars })