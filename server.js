const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const config = require('config');
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();


const app = express();
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);

/* //Serve static assets if in production
if (process.env.NODE_ENV = "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
 */

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: 'cmpevents2021@gmail.com',
      pass: 'cmp@2021'
    },
  });
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  const BookingEmail = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: 'cmpevents2021@gmail.com',
      pass: 'cmp@2021'
    },
  });
  
  
  BookingEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "cmpevents2021@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone Number: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

  router.post("/Booking", (req, res) => {
    const Teamno = req.body.Teamno;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message; 
    const mail1 = {
      from: Teamno,
      to: "cmpevents2021@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Teamno: ${Teamno}</p>
             <p>Email: ${email}</p>
             <p>Phone Number: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    
    BookingEmail.sendMail(mail1, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });