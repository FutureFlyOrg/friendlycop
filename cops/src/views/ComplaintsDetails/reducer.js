import { SET_COMPLAINT_DETAILS } from "./constants"

const defaultState = {
    title: 'Li Europan lingues',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://via.placeholder.com/800x400',
    loaction: {
        latitude: 12.978622,
        longitude: 80.243273
    },
    status: 'QUEUE'
}

const ComplaintDetails = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        case SET_COMPLAINT_DETAILS:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default ComplaintDetails