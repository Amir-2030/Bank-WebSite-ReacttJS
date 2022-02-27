import React,{Component} from 'react';
import './style.css';


class News extends Component{
  render(){
    return (
<section id="catagorie">

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="block">
						<div class="block-heading">
							<h5> ألاخبار</h5>
						</div>	
						<div class="row">
						  	<div class="col-sm-6 col-md-4">
							    <div class="thumbnail">
							    	<a class="catagotie-head" href="/NewsDetails">
									<img src="images/news2.jpg" alt="description"/>
										<h3>تحديثات</h3>
									</a>
							      	<div class="caption">
							        	<p>
                                        الرئيس التنفيذى للبنك فرع-مصر : انتهاء عمليات تحديث الأنظمة الالكترونية بالبنك ..وحل المشكلات الطارئه
                                    
                                    </p>	<p>
							        		<a href="/NewsDetails" class="btn btn-default btn-transparent" role="button">
                                            <span class="mo">المزيد من التفاصيل</span>
							        		</a>
							        	</p>
							      	</div>	
							    </div>	
						  	</div>	
						  	<div class="col-sm-6 col-md-4">
							    <div class="thumbnail">
							    	<a class="catagotie-head" href="/NewsDetails">
									<img src="images/news2.jpg" alt="description"/>
										<h3>تحديثات</h3>
									</a>
							      	<div class="caption">
							        	<p>
                                        الرئيس التنفيذى للبنك فرع-مصر : انتهاء عمليات تحديث الأنظمة الالكترونية بالبنك ..وحل المشكلات الطارئه
                                    
                                    </p>	<p>
							        		<a href="/NewsDetails" class="btn btn-default btn-transparent" role="button">
                                            <span class="mo">المزيد من التفاصيل</span>
							        		</a>
							        	</p>
							      	</div>	
							    </div>	
						  	</div>	
                              <div class="col-sm- col-md-4" >
							    <div class="thumbnail">
							    	<a class="catagotie-head" href="/NewsDetails">
									<img src="images/news2.jpg" alt="description"/>
										<h3>تحديثات</h3>
									</a>
							      	<div class="caption">
							        	<p>
                                        الرئيس التنفيذى للبنك فرع-مصر : انتهاء عمليات تحديث الأنظمة الالكترونية بالبنك ..وحل المشكلات الطارئه
                                    
                                    </p>	<p>
							        		<a href="/NewsDetails" class="btn btn-default btn-transparent" role="button">
                                            <span class="mo">المزيد من التفاصيل</span>
							        		</a>
							        	</p>
							      	</div>	
							    </div>	
						  	</div>
                              <div id="mo">

                                 <a    href="/AllNews" class="btn btn-default btn-transparent" role="button" >
                                            <span >المزيد من الاخبار</span>
							        		</a>  
                              </div>
                             	
						</div>
					</div>	
				</div>	
			</div>	

</div>
</section>
      
    );
  
  }
  


}

export default News;