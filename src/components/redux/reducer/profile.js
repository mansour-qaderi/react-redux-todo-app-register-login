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
    userAccessed: false,
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
            }

        case Types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
            }

        case Types.USER_ACCESS:
            console.log('user access', action.payload)
            return {
                ...state,
                userAccessed: action.payload
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




