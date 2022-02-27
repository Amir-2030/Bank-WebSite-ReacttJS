
import React, { Component } from 'react';

import Footer from './../Footer';


class Login extends  Component{
  render(){
    return(
   



  <div>
 
  <form class="main-form" action="/">
   <h5 class="formTitle">  <center>تسجيل الدخول </center></h5>
  <input type="ُEmail" placeholder="البريد الاليكتروني" required className="form-control"/>
  <input type="password" placeholder="الرقم السري" required className="form-control"/>
  <a href="/" >هل نسيت كلمة السر؟</a>
 

  <input type="submit" value="   سجل  "/>

 
</form>
	

 <Footer />
    
   
      </div>
    )
  }
}
export default Login;
