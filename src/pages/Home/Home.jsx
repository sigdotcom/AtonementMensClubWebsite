import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            lineHeight: 1.2,
            margin: "0 0 12px",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          Welcome
        </h2>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "18px",
            color: "#475569",
          }}
        >
          Atonement Men’s Club
        </p>
<div
  style={{
    background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    border: "1px solid #e5ecf6ff",
    borderRadius: "8px",
    padding: "10px 14px",
    margin: "8px auto",
    maxWidth: "440px",
    minHeight: "250px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "6px",
      fontSize: "20px",
      fontWeight: 700,
      color: "#0f172a",
    }}
  >
    Our Purpose:
  </h2>
  <hr
    style={{
      margin: "0 auto 8px",
      border: "none",
      borderTop: "1px solid #e2e8f0",
      width: "40%",
    }}
  />
  <p
    style={{
      fontSize: "16px",
      lineHeight: "1.55",
      color: "#334155",
      fontFamily: "Georgia, serif",
      textAlign: "justify",
      margin: "0",
      width: "100%",
      wordSpacing: "0.3px",
    }}
  >
    Our purpose is to strengthen the bonds of brotherhood among the men of
    Atonement. Through this fellowship, we are empowered to serve the Lord by
    actively supporting our church and community. A central part of our mission
    is to raise essential funds for projects and needs that fall outside the
    regular budget, ensuring our school, church, and community possess all of
    the resources needed to thrive.
  </p>
</div>



      </div>
    </div>
  );
}
export default Home;
