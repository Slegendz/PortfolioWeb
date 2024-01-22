const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// Server used to send emails
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(5000, () => console.log("Server Running on Port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "baconcrispy296@gmail.com",
    pass: "kaux npya runm blve",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstname + " " + req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "baconcrispy296@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p> Name: ${name} </p>
        <p> Email: ${email} </p>
        <p> Phone: ${phone} </p>
        <p> Message: ${message} </p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 300, status: "Message Sent" });
      console.log("Message Sent");
    }
  });
});
