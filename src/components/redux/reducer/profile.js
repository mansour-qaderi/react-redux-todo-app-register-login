import { Types } from '../constants/actionTypes';

// const initialState = {
//     profile : {
//         email: '',
//         fullname: '',
//         username: '',
//         password: ''
//     },
//     formSubmitted: false
// }

const initialState = {
    profile: [],
    formSubmitted: false
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER:
            console.log('sing In', action.payload.user);
            const newProfile = action.payload.user
            return {
                ...state,
                profile: state.profile.concat(newProfile),
                // profile: action.payload.user,
                formSubmitted: false
            }

        case Types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }
        case Types.FORM_SUBMITION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        default:
            return state;
    }
}




