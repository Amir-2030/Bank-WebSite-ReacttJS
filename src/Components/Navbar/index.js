import React,{Component} from 'react';
import './style.css';
const Navbar = () => {
  return (
<header>
  <h1><img src="images/Logo.png" className="logoImg"/> </h1>
  <button className="navBtn"><a href="/">الرئيسية</a></button>
    <button className="navBtn"><a href="/Services">خدمتنا</a></button>
     <button className="navBtn"><a href="/OurCustomer">عملائنا </a></button>
    <button className="navBtn"><a href="/JoinUs">أنضم الينا </a></button>
    <button className="navBtn"><a href="/ContactUs">تواصل معنا </a></button>
    <button  className="navBtn  Loginbutoon"><a href="/Login">تسجيل دخول</a></button>
    <button className="navBtn Loginbutoon"><a hyyref="/SignUp">انشاء حساب جديد </a></button>
</header>
  );
}
export default Navbar;