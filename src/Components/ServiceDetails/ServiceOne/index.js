
import React, { Component } from 'react';



import Footer from '../../Footer';
class CreateACC extends  Component{
  render(){
    return(
   



  <div>
 
  <form class="main-form">
   <h5 class="formTitle">  <center>انشاء حساب بنكي </center></h5>
   <input type="text" placeholder="الاسم بالكامل " value="" required className="form-control"/>
   <input type="text" placeholder="الوظيفة" required className="form-control"/>
   <input type="date" placeholder="تاريخ الميلاد " required className="form-control"/>
  <input type="number" placeholder=" رقم الجوال" required className="form-control"/>
  <input type="number" placeholder=" رقم الارضي" required className="form-control"/>
  <input type="number" placeholder="رقم الهوية" required className="form-control"/>
  <input type="submit" value="ارسال البيانات"/>

 
</form>
	

 <Footer />
    
   
      </div>
    )
  }
}
export default CreateACC;
