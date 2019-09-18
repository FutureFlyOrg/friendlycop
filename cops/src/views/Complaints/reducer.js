import { SET_COMPLAINTS_LIST } from "./constants"

const defaultState = {
    list: []
}

const Complaints = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        case SET_COMPLAINTS_LIST:
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}

export default Complaints