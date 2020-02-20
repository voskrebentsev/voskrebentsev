import React from 'react'
import ModalForm from './ModalForm'
import ContactInfo from './ContactInfo';
import FormContextProvider from '../contexts/FormContext';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className={`container `}>
      <h1 className="display-4">Contact Me</h1>  
      <FormContextProvider>
        <div className='margin-bottom'>
          <ContactInfo />
        </div>
        <ModalForm />
      </FormContextProvider>
    </div>
  )
}

export default ContactMe;
