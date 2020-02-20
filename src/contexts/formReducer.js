
const initState = {
  fname: '',
  lname: '',
  phone: '',
  email: '',
  comment: ''
}

export const formReducer = (state = initState, action) => {
  switch(action.type){
    case 'CHANGE_FIRSTNAME':
      return {
        ...state,
      fname: action.payload
      };
    case 'CHANGE_LASTNAME':
      return {
        ...state,
        lname: action.payload
      };
    case 'CHANGE_PHONE':
      return {
        ...state,
        phone: action.payload
      };
    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'CHANGE_COMMENT':
      return {
        ...state,
        comment: action.payload
      };
    case 'SEND_DATA':
      return {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        comment: ''
      };
    default:
      return state;
  }
}