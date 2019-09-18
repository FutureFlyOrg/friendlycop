import { combineReducers } from 'redux';
import Login from './views/Login/reducer'
import Complaints from './views/Complaints/reducer'
import ComplaintDetails from './views/ComplaintsDetails/reducer'

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
    Login,
    Complaints,
    ComplaintDetails
})