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
    console.log('action', action)
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

        case Types.UPLOAD_IMAGE:
            console.log('upload image', action.payload)

            const { id, image, image_name } = action.payload;
            console.log('upload image id', id)

            const mapImage = state.profile.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        image: image,
                        image_name: image_name
                    }
                }
                else return item
            })

            return {
                ...state,
                profile: [...mapImage]
            }

        default:
            return state;
    }
}




