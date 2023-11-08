
// import "./Form.css";
// import React from "react";


// const Form = () => {


//   return (
//     <div className="form" >
//         <form>
//             <label>Your Name</label>
//             <input type="text" name="fullName"></input>
//             <label>Email</label>
//             <input type="text" name="email"></input>
//             <label>Subject</label>
//             <input type="text" name="subject"></input>
//             <label>Message</label>
//             <textarea rows="6" name="message" placeholder="Type your message here" />
//             <button className="btn">Submit</button>
            
//         </form>

//     </div>
//   )
// }

// export default Form


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';// Import the EmailJS library
// import './Form.css';

// export const ContactUs = () => {
//   const Form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Replace these values with your EmailJS Service ID, Template ID, and User ID
//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', Form.current, 'YOUR_USER_ID')
//       .then((result) => {
//         console.log(result.text);
//       })
//       .catch((error) => {
//         console.error(error.text);
//       });
//   };

//   return (
//     <div className="form">
//       <form ref={Form} onSubmit={sendEmail}>
//         <label>Your Name</label>
//             <label>Your Name</label>
//             <input type="text" name="fullName"></input>
//             <label>Email</label>
//             <input type="text" name="email"></input>
//             <label>Subject</label>
//             <input type="text" name="subject"></input>
//             <label>Message</label>
//             <textarea rows="6" name="message" placeholder="Type your message here" />
//             <button className="btn">Submit</button>
//        </form>
//     </div>
//   );
// };

// export default Form
import "./Form.css";
import React from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ewo9g9b', 'template_rq5yle4', e.target, 'As39R4jDFJ4mhSlQY')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        // Show a popup message
        alert("Your message has been successfully sent. I will contact you shortly.");
      }, (error) => {
        console.log(error.text);
        // Handle error here if needed
      });
  };

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="fullName" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message here" />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
