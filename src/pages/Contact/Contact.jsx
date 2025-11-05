import "./Contact.css";
import image from "../../assets/ACMWEBIMAGE.jpg";

function Contact() {
  return (
    //About page here
    <div className="contact">
      <div className="contactBlurbCon">
        <h1>CONTACT US</h1>
        <p>contact content</p>
        <div className="left-side">
          <img src={image} alt="Contact Photo" />
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
