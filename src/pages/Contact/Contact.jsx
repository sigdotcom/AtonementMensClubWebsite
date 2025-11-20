import "./Contact.css";
import image from "../../assets/ACMWEBIMAGE.jpg";

function Contact() {
  return (
    //About page here
    <div className="contact">
      <div className="contactBlurbCon">
        <h1>CONTACT US</h1>

        <div className="contactblock">
          <div className="left-side">
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"></img>
          </div>

          <div className="blurb">
            <h2>Contact | Contact | Contact</h2>
            <p>Lorem ipsum doset.</p>
          </div>
        </div>

        <div className="contactblock">
          <div className="left-side">
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"></img>
          </div>

          <div className="blurb">
            <h2>Contact | Contact | Contact</h2>
            <p>Lorem ipsum doset.</p>
          </div>
        </div>

        <div className="contactblock">
          <div className="left-side">
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"></img>
          </div>

          <div className="blurb">
            <h2>Contact | Contact | Contact</h2>
            <p>Lorem ipsum doset.</p>
          </div>
        </div>

        <a href="LINK TO MAILING LIST HERE :D">
          <button>Join the Mailing List</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
