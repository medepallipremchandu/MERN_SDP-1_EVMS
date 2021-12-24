import React from 'react'
import logo from './cmp.jpg'
import './Home.css';

export default function Home1 (){


  
    return(
      <>
      <div className='body'>
      <div  style={{paddingTop:''}} className="">
            <div  className='row text-center'>
                <div>
                <img class=" home1" height="900px" src="/static/media/cmp.68b46575.jpg" alt width="1550" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '57px'}}/>
                </div>
                <div className='home2'>
                <div className="container">
                  <h1 >Welcome to CMP Event Management</h1>
                <h1><small class="white">We Are Event Managers</small> <br/><strong>Nice to meet you.</strong></h1>
                <p class="lead">Lets meet up and see the required thing</p>
                <h1 id='service' class="display-4 text-center">Our Services</h1>
                </div>
                </div>
            </div>

        </div>





      

         



       
                        
          <div style={{background: 'linear-gradient(to right, #eecff3, #FFD54F)'}}>

        {/* Box */}

 <section style={{paddingTop:'50px',fontFamily: 'MarkPro,sans-serif;'}} id="gallery">
  <div  class="">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img height='310.49'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEcwU9QAiCf6Jp2OtfeYGH9Rii99jSj7VkQ&usqp=CAU" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Wedding Events</h5>
        
       <a href="/wedding" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img height='310.49' src="https://i.pinimg.com/originals/2d/a8/39/2da839fb2246326df22b9be61a768cf5.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        
        <h5 class="card-title">Birthday Events</h5>
        
       <a href="/birthday" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img height='310.49' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamYMKjowwRao2SpmY4q8ouGbYdYK5pSj2JQ&usqp=CAU" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Concerts</h5>
        
       <a href="/concerts" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
     </div>
    </div>
  </div>
</div>
</section>


<section style={{paddingTop:'50px',fontFamily: 'MarkPro,sans-serif;'}} id="gallery">
  <div  class="">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img height='310.49'src="https://www.thebhopalnews.com/wp-content/uploads/2021/05/Stand-up-comedy.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Stand Up Comedy</h5>
        
       <a href="/Standup" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img height='310.49' src="https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Art Showcases</h5>
        
       <a href="/Artshow" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img height='310.49' src="http://www.jessideas.com/wp-content/uploads/2018/04/Arijit-Singh-Tour-2018-S2-700x492.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Fests</h5>
        
       <a href="/Fest" class="btn btn-outline-success btn-sm">Read More</a>
        
      </div>
     </div>
    </div>
  </div>
</div>
</section>

<div className="">
  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img height='454.7' src="https://greatcatwalk.com/images/portfolio_grid/traumacon/0.jpg" alt="" class="card-img-top"/>
        <h5 class="card-title">Musicals</h5>
        
        <a href="/Musical" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img height='454.7' src="http://files.delhievents.com/images/events/2014/june/Mayar-Khela-Dance-Drama.jpg" alt="" class="card-img-top"/>
        <h5 class="card-title">Dramas</h5>
        
        <a href="/Drama" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
</div>



<div class="container py-3">
  <div class="title h1 text-center"></div>
  <div class="card">
    <div class="row ">
      <div class="col-md-7 px-3">
        <div class="card-block px-6">
          <h4 class="card-title">Our Company</h4>
          <p class="card-text">
            We are three make this cmp event management for the events
          </p>
          <p class="card-text">there are different types of events in our management we are team and we will provide our best to give the best in the given event</p>
          <br/>
         
        </div>
      </div>
      <div class="col-md-5">
        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
            <li data-target="#CarouselTest" data-slide-to="1"></li>
            <li data-target="#CarouselTest" data-slide-to="2"></li>

          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img height='300' width='550' class="d-block" src="https://res.cloudinary.com/dreamworth-in/image/upload/v1502875248/event-planning.jpg" alt=""/>
            </div>
            <div class="carousel-item">
              <img height='300' width='550' class="d-block" src="https://content3.jdmagicbox.com/comp/mysore/a3/0821px821.x821.190207190300.t3a3/catalogue/varsha-event-management-mysore-5xoc6luyfs.jpg?clr=000066" alt=""/>
            </div>
            <div class="carousel-item">
              <img height='300' width='550' class="d-block" src="data:image/png;base64,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" alt=""/>
            </div>
            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
 
  <div class="container py-5">
       <div class="row">
                <div class="mb-4 ">
                <a href="/about" >   
                <hr data-content="More" className="hr-text"/>
                </a>
            </div>
            </div>
      </div>
</div>
</div>



       
        
</>
    );
}
