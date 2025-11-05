import "./Christmas.css";
import treeLot from "./TreeLot.png";

function Christmas() {
  return (
    <div className="christmas">
      <div className="mainCon">
        <h1 style={{ textAlign: 'center', color: "#070" }}>
            Christmas Tree Lot
        </h1>
        <div class="columnHolder distribute">
        <div class="column">
        
        <p>main christmas content here</p>
        <h2 style={{color: "#070"}}>Opening Days</h2>

        <p>This year's Christmas Tree Lot will be open from Saturday, November 29th to Friday, December 21st, or sooner if we sell out.</p>
        
        <table class="dayToTimeTable">
        <caption>Hours</caption>
        
        <tr><td>Mon - Fri</td><td>3:00 P.M. - 8:30 P.M.</td></tr> 
        <tr><td>Sat</td><td>10 A.M. - 8:30 P.M.</td></tr>
        <tr><td>Sun</td><td>12 P.M. - 8:30 P.M.</td></tr>
        </table>
        <br/>
        <hr/>
        <br/>
        <h2>Menu</h2>
        <p>
            <div class="columnHolder">
                <div class="columnMenu">

                    <h3>Trees</h3>
                    <p>Frasier Fir - price?</p>
                    <p>Balsam Fir</p>
                    <p>Scotch Pine</p>

                </div>
                <div class="columnMenu">

                    <h3>Equipment</h3>
                    <p>Pine Roping</p>
                    <p>Tree Stands</p>
                    <p>Tree Kits</p>

                </div>
            </div>
            {/*Prices?*/}
        </p>

        </div>
        <div class="column border">
            <img
                src={treeLot}
                alt="Christmas Tree Lot"
                style={{
                    float: 'right',
                    bottom: '0px',
                    right: '0px',
                    // height: '450px',
                    width: '100%'
                }}
            />
        </div>
        </div>

      </div>
      {/*
      <div className="christmasMenuCon">
        <h2>Menu</h2>
        <p>
            <div class="columnHolder">
                <div class="columnMenu">

                    <h3>Trees</h3>
                    <p>Frasier Fir - price?</p>
                    <p>Balsam Fir</p>
                    <p>Scotch Pine</p>

                </div>
                <div class="columnMenu">

                    <h3>Equipment</h3>
                    <p>Pine Roping</p>
                    <p>Tree Stands</p>
                    <p>Tree Kits</p>

                </div>
            </div>
            {/*Prices?}
        </p>
      </div>*/}
    </div>
  );
}
/*
function Christmas() {
    return (
        <div className="christmas" style={{margin: "0px 20px"}}>

            <hr />

            <pre style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                fontFamily: 'inherit',
                margin: 0
            }}>

<p style={{width: "48%", textAlign: "justify"}}>
Welcome to our tree lot! We proudly offer a fantastic selection of quality Frasier Fir, Balsam Fir, and Scotch Pine trees, along with pine roping, tree stands, and tree kits.
A heartfelt thank you to all our returning customers we can't wait to see you again this year! If you haven't visited us before, we invite you to stop by and check out our beautiful trees and friendly service.
</p>


            </pre>

        </div>
    );
}

export default Christmas; */
export default Christmas;
