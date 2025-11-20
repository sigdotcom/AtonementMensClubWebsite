import "./about.css";

function About() {
  return (
    //About page here
    
    <div className="about">
      <div className="aboutMainCon">
        <h2 style={{color: "#3993DD", fontSize: "50px"}}>ABOUT US</h2>
        <p>The Atonement Men’s Club is a faith-driven fellowship of men from Atonement Church and School, 
        united by a shared mission: to grow in Christian fellowship, support our parish, and serve our community.
        Since its founding in 1989, this club has been dedicated to two core goals:
        </p>

        <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.6", marginTop: "0.5rem" }}>
          <li><strong>Fellowship:</strong> Building strong, supportive relationships among the male members of the parish.</li>
          <li><strong>Service & Support:</strong> Raising funds and contributing time to non-budgeted needs of our church, school, and the wider community.</li>
        </ul>
        
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.6", marginTop: "0.5rem" }}>
        <h2 style={{color: "#3993DD", fontSize: "30px"}}><strong>What We Do ?</strong></h2>
        <li style={{marginTop: "0.3rem"}}><strong>Fundraising & Community Events: </strong>Our signature activities include a Christmas Tree Lot and a BBQ. 
        These events not only bring us together but also generate funds that go directly back into the church, school, and local outreach efforts.</li>
        
        
        <li style={{marginTop: "0.3rem"}}><strong>Wishing Well Committee: </strong>Through a formal process, we review written requests for financial support. Once approved, funds are allocated by majority vote of the membership. 
        Since our inception, we’ve contributed over $400,000 to various needs- supporting school programs, parish projects, and community causes.</li>

        <li style={{marginTop: "0.3rem"}}><strong>Outreach & Charity: </strong>We partner with organizations like Meals on Wheels and Room at the Inn. 
        We also help run community programs like visitation initiatives and a garden project. </li>

        <li style={{marginTop: "0.3rem"}}><strong>Fellowship Activities: </strong>We host social events like Texas Hold ’em tournaments, family BBQ picnics, and “Day at the Ballpark” outings, all to strengthen bonds within our community.</li>
       </ul>
       
       <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.6", marginTop: "0.5rem" }}>
        <h2 style={{color: "#3993DD", fontSize: "30px"}}><strong>Membership</strong></h2>
        <p>Membership is open to all men of high school age and older from Atonement Church and School, as well as friends of the parish. 
          As of now, we have more than 60 active members who contribute their time, ideas, and energy.
          We’re always grateful for the support of their families, especially during our big events.</p>
        </ul>

      </div>
     

      <div className="imgGalleryCon">
        <p>image gallery here sending updates lol dw</p>
      </div>
    </div>
  );
}

export default About;
