<<<<<<<<< Temporary merge branch 1
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>

      <div
        style={{
          border: "5px solid #00010e",
          height: "250px",
          width: "450px",
          padding: "10px 20px 20px 10px",
          margin: "40px auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: "-5px" }}>Our Purpose:</h2>
        <hr />
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontFamily: "inherit",
            fontSize: "18px",
            margin: 0,
          }}
        >
          Our purpose is to strengthen the bonds of brotherhood among the men of
          Atonement. Through this fellowship, we are empowered to serve the Lord
          by actively supporting our church and community. A key part of our
          mission is to raise essential funds for those important projects and
          needs that fall outside the regular budget, ensuring our school,
          church, and community have the resources to thrive.
        </pre>
      </div>
    </div>
  );
}
export default Home;
=========
function Home() { 
    return (
        <div className="home">
            <h1>Home Page</h1>
            
            <div style={{
                border: '5px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '2px 1px 2px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.10), 0 18px 36px rgba(0,0,0,0.08)', 
                height: 'auto',         
                width: 'min(90%, 450px)',         
               padding: '15px 20px 20px 20px',
               margin: '50px auto',  
             
            
            }}> 
                <h2 style={{textAlign: 'center', marginTop: '0', marginBottom: '10px'  }}>Our Purpose:</h2>
                <hr style={{ borderTop: '-1px solid rgba(9, 0, 0, 0.15)', margin: '0 0 5px'}} />
                <pre style={{
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    fontFamily: 'arial, sans-serif',
                    fontSize: '19px',
                    marginBottom: '-2px',
                    marginTop: '12px'
                }}>
Our purpose is to strengthen the bonds of brotherhood among the men of Atonement. 
Through this fellowship, we are empowered to serve the Lord by actively supporting
our church and community. A key part of our mission is to raise essential funds
for those important projects and needs that fall outside the regular budget, 
ensuring our school, church, and community have the resources to thrive.
                </pre>
                
            </div>
        </div>
    );
}
export default Home;
