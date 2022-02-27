
import React, { Component } from 'react';

import Footer from './../Footer';
import './style.css';

class Shakwa extends  Component{
  render(){
    return(
   



  <div>

<form class="main-form" action="/"> 

   <h5 class="formTitle">  <center>الشكاوي</center></h5>
  <input type="text" placeholder="ألاسم بالكامل"  required className="form-control"/>
  <input type="number" placeholder="رقم الحساب" min="0"required className="form-control"/>
  
  <textarea placeholder="المشكلة "  required className="form-control"/>
  <input type="submit" value="  تسجيل شكوي " className="form-control"/>
 </form>



	

 <Footer />
    
   
      </div>
    )
  }
}
export default Shakwa;
