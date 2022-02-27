
import React, { Component } from 'react';

import Footer from './../Footer';
import './style.css';

class ContactUs extends  Component{
  render(){
    return(
   



  <div>
 
  <form class="main-form"  action="/">
   <h5 class="formTitle">  <center>تواصل معنا </center></h5>
  <input type="text" placeholder="ألاسم بالكامل " required className="form-control"/>
  <input type="number" placeholder="رقم الهاتف"  required className="form-control"/>
  <textarea placeholder="الرسالة "  required className="form-control"/>
 
  <input type="submit" value="  ارسل "/>

 
</form>
	

 <Footer />
    
   
      </div>
    )
  }
}
export default ContactUs;
