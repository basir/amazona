const {
    ADDRESS_CREATE_REQUEST,
    ADDRESS_CREATE_SUCCESS,
    ADDRESS_CREATE_FAIL,
    ADDRESS_LIST_REQUEST,
    ADDRESS_LIST_SUCCESS,
    ADDRESS_LIST_FAIL,
    ADDRESS_DETAILS_RESET
  } = require('../constants/addressConstants');
  
  export const addressListReducer = (
    state = { loading: true, addressesList: [] },
    action
  ) => {
    switch (action.type) {
      case ADDRESS_LIST_REQUEST:
        return { loading: true };
      case ADDRESS_LIST_SUCCESS:
        return {
          loading: false,
          addressList: action.payload.address,
        };
      case ADDRESS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

//   export const productCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case PRODUCT_CREATE_REQUEST:
//         return { loading: true };
//       case PRODUCT_CREATE_SUCCESS:
//         return { loading: false, success: true, product: action.payload };
//       case PRODUCT_CREATE_FAIL:
//         return { loading: false, error: action.payload };
//       case PRODUCT_CREATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
//   export const productUpdateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case PRODUCT_UPDATE_REQUEST:
//         return { loading: true };
//       case PRODUCT_UPDATE_SUCCESS:
//         return { loading: false, success: true };
//       case PRODUCT_UPDATE_FAIL:
//         return { loading: false, error: action.payload };
//       case PRODUCT_UPDATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
//   export const productDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//       case PRODUCT_DELETE_REQUEST:
//         return { loading: true };
//       case PRODUCT_DELETE_SUCCESS:
//         return { loading: false, success: true };
//       case PRODUCT_DELETE_FAIL:
//         return { loading: false, error: action.payload };
//       case PRODUCT_DELETE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
//   export const productReviewCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case PRODUCT_REVIEW_CREATE_REQUEST:
//         return { loading: true };
//       case PRODUCT_REVIEW_CREATE_SUCCESS:
//         return { loading: false, success: true, review: action.payload };
//       case PRODUCT_REVIEW_CREATE_FAIL:
//         return { loading: false, error: action.payload };
//       case PRODUCT_REVIEW_CREATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
  