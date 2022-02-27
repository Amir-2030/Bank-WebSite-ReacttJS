
import React, { Component } from 'react';
import './style.css';
import Home from './../Home';
import News from './../News';
import Support from '../Support';

import Banner from './../banner';
import OurPartners from '../OurPartners';
import Footer from './../Footer';

class Index extends  Component{
  render(){
    return(
      <div>
    <Home />
    <News />
    <Support />
    <OurPartners />
    <Banner />
    
    
    <Footer />
      </div>
    )
  }
}
export default Index;
