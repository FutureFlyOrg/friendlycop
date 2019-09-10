import { combineReducers } from 'redux';
import Login from './views/Login/reducer'

const defaultState = {

}

const Application = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        default:
            return state
    }
}

export default combineReducers({
    Application,
    Login
})