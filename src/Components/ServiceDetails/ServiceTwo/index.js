
import React, { Component } from 'react';



import Footer from '../../Footer';
import './style.css';

class Transfer extends  Component{
  render(){
    return(
   



 
<div class="">


<div class="container ourCustomer">

  <div class="row">
    <div class="col-md-6 col-sm-3 col-xs-12">
      <div class="row section-success ourTeam-box  main-form3 text-center">
        
          <img src="images/transfer.png" alt="description"/>
       
        
       
      </div>
    </div>
    <div class="col-md-6 col-sm-3 col-xs-12">
      <div class="row section-success ourTeam-box text-center">
       
  <form class="main-form2 ">
   <h5 class="formTitle">  
   <center>تحويل اموال</center></h5>
  <input type="number" placeholder="رقم البطاقة" required className="form-control"/>
  <input type="number" placeholder="كود المحول اليه" required className="form-control"/>
  <input type="number" placeholder="المبلغ" required className="form-control"/>
  <input type="password" placeholder="الرقم السري" required className="form-control"/>
 

  <input type="submit" value="   ارسل  "/>

 
</form>
      </div>
    </div>
    
    
         
 
  </div>
</div>



<Footer />
    
</div>

    )
  }
}
export default Transfer;
