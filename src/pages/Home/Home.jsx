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
