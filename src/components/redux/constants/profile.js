import { Types } from './actionTypes';

export const ActionCreators = {

  addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  // updateProfileImage: (image) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { image } }),

  // updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status } }),

  login: (user) => ({ type: Types.LOGIN, payload: { user } }),

  userAccess: (status) => ({ type: Types.USER_ACCESS, payload: status }),

  userData: (data) => ({ type: Types.USER_DATA, payload: data }),

  uploadImage: (image) => ({ type: Types.UPLOAD_IMAGE, payload: image }),
}