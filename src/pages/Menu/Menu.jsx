import "./menu.css";

function Menu() {
  return (

    //BBQ menu page here
    <div className="menu">

      <div className="bbqHours">
        <h1>Charity Never Tasted So Good!</h1>
        <h2>2026 BBQ Schedule</h2>
        <h3>Hours:</h3>
        <p>Saturday + Sunday<br/>
          11 A.M. - 7 P.M.
        </p>
        <h3>Dates:</h3>
        <p>
          Aprill 11-12<br/>
          May 2-3<br/>
          June 13-14<br/>
          July 11-12<br/>
          August 8-9<br/>
          September 12-13<br/>
        </p>
      </div>

      
      <div className="bbqMenu">
        <img src="src/pages/Menu/images/brisket.jpg" alt="BBQ" className="brisketImage"/>
        <img src="src/pages/Menu/images/ribs.jpg" alt="BBQ" className="ribsImage"/>
        <img src="src/pages/Menu/images/coleslaw.jpg" alt="BBQ" className="coleslawImage"/>
        
        <div className="entreesBlock">Entrees</div>


        <h>BBQ Menu</h>
        <p className="entreesFormat">
          Ribs<br/>
          Pork Steaks<br/>
          Brisket<br/>
          Pulled Pork<br/>
          Brats<br/>
          Hot Dogs<br/>
          Hamburgers<br/>
          Cheeseburgers<br/> 
          Veggie Burgers<br/>
          Cheesy Hashbrowns<br/>
        </p>

        <p className="sidesFormat">
          Coleslaw<br/>
          Beans<br/>
        </p>
        





      
      </div>  







    </div>
  );
}

export default Menu;
