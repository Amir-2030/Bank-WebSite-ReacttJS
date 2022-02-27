
import React, { Component } from 'react';

import Footer from './../Footer';


class SignUP extends  Component{
  render(){
    return(
   



  <div>
 
  <form class="main-form" action="/">
   <h5 class="formTitle">  <center>انشاء حساب جديد </center></h5>
  <input type="ُEmail" placeholder="البريد الاليكتروني" className='form-control'/>
  <input type="number" placeholder=" رقم الجوال" className='form-control'/>
  <input type="password" placeholder="الرقم السري" className='form-control'/>
  <input type="password" placeholder="تأكيد الرقم السري " className='form-control'/>
  
 

  <input type="submit" value="سجل"/>
<a href="/Login"> لدي بالفعل حساب</a>
 
</form>
	

 <Footer />
    
   
      </div>
    )
  }
}
export default SignUP;
