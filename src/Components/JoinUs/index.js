
import React, { Component } from 'react';

import Footer from './../Footer';
import './style.css';

class JoinUs extends  Component{
  render(){
    return(
   



  <div>
 
  <form class="main-form" action="/">
   <h5 class="formTitle">  <center>أنضم الينا</center></h5>
  <input type="text" placeholder="ألاسم بالكامل "  required className="form-control"/>
  <input type="number" placeholder="رقم الهاتف" required className="form-control"/>
  <input type="ُEmail" placeholder="البريد الاليكتروني"  required className="form-control"/>
  <input type="text" placeholder="الوظيفة  "  required className="form-control"/>
  <input type="text" placeholder="جهة العمل   "  required className="form-control"/>
  
 
  <input type="submit" value="   انضم الان "/>

 
</form>
	

 <Footer />
    
   
      </div>
    )
  }
}
export default JoinUs;
