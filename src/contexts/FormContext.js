import React, {createContext, useReducer} from 'react';
import { formReducer } from './formReducer';
export const FormContext = createContext();

const FormContextProvider = (props) => {

  const [form, dispatch] = useReducer(formReducer)

  return (
    <FormContext.Provider value={{form, dispatch}}>
      {props.children}
    </FormContext.Provider>
  )
}
export default FormContextProvider;