
import React, {  Component } from 'react';

import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Faq from './Components/Faq';

import News from './Components/News';
import Banner from './Components/banner';
import Profile from './Components/banner';
import Support from './Components/Support';

import About from './Components/About';
import Shakwa from './Components/Shakwa';
import ContactUs from './Components/ContactUs';
import Download from './Components/Download';
import AllNews from './Components/AllNews';
import NewsDetails from './Components/NewsDetails';
import JoinUs from './Components/JoinUs';
import Login from './Components/Login';
import SignUP from './Components/SignUp';
import OurCustomer from './Components/OurCustomer';
import Services from './Components/Services';
import CreateACC from './Components/ServiceDetails/ServiceOne';
import Transfer from './Components/ServiceDetails/ServiceTwo';
import Qard from './Components/ServiceDetails/ServiceThree';

import PhoneCash from './Components/ServiceDetails/ServiceFour';
import Otsawq from './Components/ServiceDetails/ServiceFive';
import Bills from './Components/ServiceDetails/ServiceSix';
class App extends  Component{
  render(){
    return(
     
    
<BrowserRouter> 
   

  <Navbar />
  <Routes>
    <Route path="/" element={<Index />} />
   
    <Route path="/News" element={<News />} />
    <Route path="/Faq" element={<Faq />} />
    <Route path="/banner" element={<Banner />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Support" element={<Support />} />
   
    <Route path="/About" element={<About />} />
    <Route path="/Shakwa" element={<Shakwa />} />

    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/Download" element={<Download />} />
    <Route path="/Banner" element={<Banner />} />
    <Route path="/AllNews" element={<AllNews />} />
    <Route path="/NewsDetails" element={<NewsDetails />} />
    <Route path="/JoinUs" element={<JoinUs />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUP" element={<SignUP />} />
    <Route path="/OurCustomer" element={<OurCustomer />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/CreateACC" element={<CreateACC />} />
    <Route path="/Transfer" element={<Transfer />} />
    <Route path="/Qard" element={<Qard />} />
    <Route path="/PhoneCash" element={<PhoneCash />} />
    <Route path="/Otsawq" element={<Otsawq />} />
    <Route path="/Bills" element={<Bills />} />

    
  </Routes>
  
  
</BrowserRouter> 
    )
  }
}
export default App;
