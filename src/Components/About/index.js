import React from 'react';
import './style.css';
import Footer from './../Footer';
const About = () => {
  
  return (
      
    <div>

    <div class="content">
    <h5> عن البنك</h5>
    <br />
      <details open>
      <summary open>    عنا  </summary>
      <div class="faq__content"  >
        <p>
        يقدم بنك امير  مجموعة كاملة من الخدمات المصرفية لعملائه من خلال شبكة من الفروع والوحدات المصرفية في جميع أنحاء البلاد. حماس امير   الذي لا مثيل له لتقديم أفضل الخدمات وابتكار منتجات جديدة. في امير ، نهدف إلى تلبية الاحتياجات المتطورة لعملائنا ، من أجل كسب ثقتهم ، ووضع أنفسنا في نهاية المطاف في طليعة المشهد المصرفي على المستوى الوطني. يخضع البنك للقانون 88/2003.
          
        </p>
      </div>
    </details>
    
    
    <details open>
      <summary open>    رؤيتنا  </summary>
      <div class="faq__content"  >
        <p>
        نهدف إلى تلبية الاحتياجات المتطورة لعملائنا ، من أجل كسب ثقتهم ، ووضع أنفسنا في نهاية المطاف في طليعة المشهد المصرفي على المستوى الوطني.   
        </p>
      </div>
    </details>
    
    
    </div>
    
        
        <Footer />
          </div>
  );
}
export default About;