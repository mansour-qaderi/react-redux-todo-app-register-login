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
    currentlyUser: [],
    userAccessed: false,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER:
            console.log('sing In', action.payload.user);
            const newProfile = action.payload.user
            return {
                ...state,
                profile: state.profile.concat(newProfile),
                currentlyUser: [action.payload.user]
            }


        case Types.USER_ACCESS:
            console.log('user access', action.payload)
            return {
                ...state,
                userAccessed: action.payload
            }

        case Types.USER_DATA:
            console.log('user datas', action.payload);
            return {
                ...state,
                currentlyUser: [action.payload]
            }

        case Types.UPDATE_USER:
            console.log('update user', action.payload)

            const { id, email, fullname, username, password } = action.payload;
            console.log('upload image id', id)

            const mapUser = state.profile.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        email: email,
                        fullname: fullname,
                        username: username,
                        password: password,
                    }
                }
                else return item
            })

            return {
                ...state,
                profile: [...mapUser]
            }

        case Types.UPLOAD_IMAGE:
            console.log('upload image', action.payload)

            console.log('upload image id', action.payload.id)

            const mapImage = state.profile.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        image: action.payload.image,
                        image_name: action.payload.image_name
                    }
                }
                else return item
            })

            return {
                ...state,
                profile: [...mapImage],
                currentlyUser: [action.payload]
            }

        default:
            return state;
    }
}




