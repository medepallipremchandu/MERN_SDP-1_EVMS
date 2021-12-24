import React, { useState } from 'react';
import "../Components/contact.css"
function Booking() {
    const [, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { Teamno, email,phone, message } = e.target.elements;
      let details = {
        Teamno: Teamno.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/", {
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
        <div className="body">
         <div style={{paddingTop:'100px' ,paddingLeft:'500px'}} class=" position-relative">

        <div class="container">
        <div class="row">
        
        <div class="col-md-6">
        <form  onSubmit={handleSubmit} class="mb-5" method="post" id="contactForm" name="contactForm">
        <div class="row">
        <div class="col-md-12 form-group">
        <label for="name" class="col-form-label">Teamno</label>
        <input type="text" class="form-control" name="Teamno" id="number" required/>
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
        <input style={{marginTop:"50px"}} type="submit" value="BookingTeam" class="btn btn-primary rounded-0 py-2 px-4"/>
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

export default Booking;