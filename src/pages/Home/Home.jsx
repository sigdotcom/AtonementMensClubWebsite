import "./Home.css";

function Home() {
  return (
    <div className="home" style={{ padding: "40px 16px", background: "#f8fafc" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
            boxShadow: "0 10px 24px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
            borderRadius: 0,
            padding: "6px 18px 18px",
            margin: "12px auto 0",
            maxWidth: "420px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Our Purpose:
          </h2>
          <hr style={{ margin: "6px 0 12px", borderColor: "#e5e7eb" }} />
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#334155",
              textAlign: "justify",
            }}
          >
            Our purpose is to strengthen the bonds of brotherhood among the men of Atonement. Through this fellowship, we are empowered to serve the Lord by actively supporting our church and community. A central part of our mission is to raise essential funds for projects and needs that fall outside the regular budget, ensuring our school, church, and community have the resources to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
