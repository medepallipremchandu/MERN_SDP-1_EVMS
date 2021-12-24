import React, { useState } from 'react';
import "../Components/contact.css"
function Contact() {
    const [, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email,phone, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return ( 
        <>
        <div className="contact">
         <div style={{paddingTop:'100px'}} class=" position-relative">

        <div class="container">
        <div class="row">
        <div class="col-md-5 mr-auto">
        <h2>Contact Us</h2>
        <p class="mb-5">Feel free and Email us with any questions or inquiries or call 7222813555. We would be happy to answer your question about our services. </p>
        <ul class="list-unstyled pl-md-5 mb-5">
        <h4>Office Location</h4><br/>
        <li class="d-flex text-black mb-2">
        <span class="mr-3"><span class="icon-map"></span></span>
        12th line, Bander Road Area, Vijayawada 520008<br/> Andhra Pradesh, India
        </li>
        <li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"></span></span> +91 7222813555</li>
        <li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"></span></span> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="741d1a121b34190d031116071d00115a171b19">cmpevents2021@gmail.com</a> </li>
        </ul>
        </div>
        <div class="col-md-6">
        <form  onSubmit={handleSubmit} class="mb-5" method="post" id="contactForm" name="contactForm">
        <div class="row">
        <div class="col-md-12 form-group">
        <label for="name" class="col-form-label">Name</label>
        <input type="text" class="form-control" name="name" id="name" required/>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12 form-group">
        <label for="email" class="col-form-label">Email</label>
        <input type="text" class="form-control" name="email" id="email"/>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12 form-group">
        <label for="phone" class="col-form-label">Phone Number</label>
        <input type="tel" class="form-control" name="phone" id="phone"/>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12 form-group">
        <label for="message" class="col-form-label">Message</label>
        <textarea class="form-control" name="message" id="message" cols="30" rows="7"></textarea>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <input style={{marginTop:"50px"}} type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4"/>
        <span class="submitting"></span>
        </div>
        </div>
        </form>
        <div id="form-message-warning mt-4"></div>

        </div>
        </div>

        </div>
        </div>
        </div>
        </>
     );
}

export default Contact;