import React, {useContext, useReducer, useState} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { formReducer } from '../../contexts/formReducer';
import * as emailjs from 'emailjs-com';

const FormToContact = () => {
  const [isDisabled, setDisable] = useState(true);
  const {isLight} = useContext(ThemeContext);
  const bgColor = isLight ? 'bg-light' : 'bg-dark';
  const initState = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    comment: ''
  }
  const [form, dispatch] = useReducer(formReducer, initState)

  const onChangeHandler = (e) =>{
    if (form.fname && form.lname && 
        form.email && form.comment &&
        e.target.id !== 'phone' && e.target.value){
      setDisable(false);
    }else{
      setDisable(true);
    }
    switch(e.target.id){
      case 'fname':
        dispatch({
          type: 'CHANGE_FIRSTNAME',
          payload: e.target.value
        })
        break;
      case 'lname':
        dispatch({
          type: 'CHANGE_LASTNAME',
          payload: e.target.value
        })
        break;
      case 'email':
        dispatch({
          type: 'CHANGE_EMAIL',
          payload: e.target.value
        })
        break;
      case 'phone':
        dispatch({
          type: 'CHANGE_PHONE',
          payload: e.target.value
        })
        break;
      case 'comment':
        dispatch({
          type: 'CHANGE_COMMENT',
          payload: e.target.value
        })
        break;
      default:
        break;
      }
  }

  const submitTheForm = (e) => {
    e.preventDefault();
    emailjs.send('gmail', 'template_Nn4nTg9r', {
      from_name: form.email,
      to_name: 'voskrebentsevmatt@gmail.com',
      subject: 'contact_me',
      message_html: form.comment,
      ...form
    }, 'user_XNjWuUvHuo836emCh0ZhC')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    dispatch({
      type: 'SEND_DATA'
    })
  }


  return (
    <>
      <div className="modal-body">
        <form className={bgColor} onSubmit={submitTheForm}>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              className="form-control" 
              placeholder="write your first name" 
              required
              value={form.fname}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="form-control"
              placeholder="write your last name"
              value={form.lname}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email" className="form-control"
              placeholder="name@example.com"
              required
              value={form.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              id="phone"
              className="form-control"
              placeholder="your phone number"
              value={form.phone}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment Area</label>
            <textarea
              className="form-control"
              id="comment"
              rows="3"
              value={form.comment}
              onChange={onChangeHandler}
              required
            ></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button 
          type="button" 
          className="btn btn-primary"
          data-toggle="modal"
          onClick={submitTheForm}
          data-dismiss="modal"
          disabled={isDisabled}
        >Send Message</button>
      </div>
      </>
      
      
      
      
  )
}

export default FormToContact
