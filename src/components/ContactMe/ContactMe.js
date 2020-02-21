import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo';
import FormContextProvider from '../../contexts/FormContext';
import './ContactMe.css';
import ModalForm from '../ModalForm/ModalForm';

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
