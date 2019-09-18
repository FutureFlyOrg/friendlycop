import { SET_COMPLAINT_DETAILS, UPDATE_COMPLAINT_STATUS } from "./constants"

const defaultState = {
    id: '',
    actionBy: "47a2e550-d53d-11e9-9c17-e96c12a77f03",
    comments: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    datetime: { _seconds: 1568636921, _nanoseconds: 359000000 },
    image: "https://firebasestorage.googleapis.com/v0/b/friendlycop-4981d.appspot.com/o/images%2F1001-p7pml9ygeqo.jpg?alt=media&token=844be9f0-d87d-11e9-af21-0ba2eac8b2dd",
    location: {
        _latitude: 12.98432,
        _longitude: 80.25894
    },
    status: "ACTION_TAKEN",
    username: "1001"
}

const ComplaintDetails = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        case SET_COMPLAINT_DETAILS:
            return {
                ...state,
                ...payload
            }
        case UPDATE_COMPLAINT_STATUS:
            return {
                ...state,
                status: payload
            }
        default:
            return state
    }
}

export default ComplaintDetails