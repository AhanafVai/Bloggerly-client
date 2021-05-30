import React from 'react';
import Logo from '../../images/onlinelogomaker-052821-2215-1198.png'
import { useForm, ValidationError } from '@formspree/react';
import './Footer.css'

//! Test form
function ContactForm() {
  const [state, handleSubmit] = useForm("xleabnve");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<div className="footer-card card mb-4" style={{width:"18rem",boxShadow:"10px 10px 20px #878787"}}>
     <div className="card-body">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
     className="form-control mb-2"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
     className="form-control mb-2"
        id="name"
        type="text" 
        name="name"
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
     
      <textarea
     placeholder="comment*"
        id="message"
        name="message"
        rows="3"
        className="form-control mb-2"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="btn btn-dark" disabled={state.submitting}>Submit</button>
     
    </form>
    </div>
</div>
  );
}




const Footer = () => {

    return (
        <div className="footer pt-5 row d-flex justify-content-center  mx-auto">
            <div className="col-md-3 col-sm-2 text-center"><img className="logo"  src={Logo} alt="" />
            <p className="pt-5"> <b>Bloggerly</b>  medialabs pvt. ltd.
            <br />
©COPYRIGHT 2021</p> </div>
            <div className="col-md-3 col-sm-2 text-center"> <h1>Help & FAQs</h1>
            <ul  style={{listStyle:'none',paddingTop:'5rem'}}>
            <li>  Terms & conditions</li>
            <li> Privacy Policies</li>
            <li>  Editorial Policy</li>
            </ul>

               
             
           
            </div>
            <div className="col-md-3 col-sm-4 ps-md-5 text-center">  <ContactForm /></div>
        </div>
    );
};

export default Footer;