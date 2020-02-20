import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import FormToContact from './FormToContact';
import FormContextProvider from '../contexts/FormContext';
import './ModalForm.css';

const ModalForm = () => {
  const {isLight} = useContext(ThemeContext);
  const btnColor = isLight ? 'btn-ddd' : 'btn-dark';
  const bgColor = isLight ? 'bg-light' : 'bg-dark';
  const textColor = !isLight ? 'text-light' : 'text-dark';
  return (
        <FormContextProvider>
          <div>
            <button type="button" className={`btn ${btnColor}`} data-toggle="modal" data-target="#exampleModalLong">
              Contact Me
            </button>
          </div>
        <div className={`modal fade`}  id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className={`modal-dialog`} role="document">
            <div className={`modal-content ${bgColor} ${textColor}`}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Fill The Form</h5>
                <button type="button" className={`close ${textColor}`} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div >
                <FormToContact />
              </div>
            </div>
          </div>
        </div>
      </FormContextProvider>
  )
}

export default ModalForm
