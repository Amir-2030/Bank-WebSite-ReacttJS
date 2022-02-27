
import React, { Component } from 'react';



import Footer from '../../Footer';
import './style.css';
class PhoneCash extends  Component{
  render(){
    return(
   



 
<div class="">


<div class="container ourCustomer">

  <div class="row">
    <div class="col-md-6 col-sm-3 col-xs-12">
      <div class="row section-success ourTeam-box  main-form5 text-center">
        
      <ul class="ullist">
  <li class="lilist">هذه الخدمة مقدمة لعملاء البنك   المصدرة لهم بطاقات ماستركارد و فيزا و ميزة</li>
  <li class="lilist">قم بإدخال  معلوماتك المسجلة لدى البنك حتى يتم استقبال طلبكم بنجاح</li>
  <li class="lilist"> سيتم تسجيل طلبكم على النظام وسيتم فور تنفيذه ارسال رابط تحميل التطبيق</li>
</ul>
       
      </div>
    </div>
    <div class="col-md-6 col-sm-3 col-xs-12">
      <div class="row section-success ourTeam-box text-center">
       
  <form class="main-form4 ">
   <h5 class="formTitle">  
   <center>خدمة فون كاش </center></h5>
  <input type="number" placeholder="رقم البطاقة" required className="form-control"/>
  <input type="number" placeholder="رقم الموبايل" required className="form-control"/>
  
 

  <input type="submit" value="   اشترك  "/>

 
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
export default PhoneCash;
