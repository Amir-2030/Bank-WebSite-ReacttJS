import React from 'react';


import './style.css';

const Home = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img   height="600px"  class="d-block w-100" src="images/2.jpg" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>البنك الدولي  </h5>
                    <h4>نقدم دائمًا قيمة لعملائنا ومجتمعنا ومساهمينا</h4>
                </div>
            </div>




            
            <div class="carousel-item">
            <img  height="600px"  class="d-block w-100" src="images/3.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
            <img height="600px" class="d-block w-100" src="images/1.jpg" alt="First slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  );



}

export default Home;