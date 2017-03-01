import {
    ADD_TODO,
    COMPLETE_TODO
} from '../actions';

export default function todos
(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.splice(0, action.index),
                /*{
                    text: state[action.index].text,
                    completed: true
                },*/
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.splice(action.index+1)
            ];
        default:
            return state;
    }
}