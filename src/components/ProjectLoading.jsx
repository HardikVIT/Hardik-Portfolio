function ProjectLoading({ progress }) {
  return (
    <div style={{
      width: "500px",
      height: "600px",
      background: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#d4d4d4", fontSize: "24px", marginBottom: "48px", letterSpacing: "0.1em" }}>
          Loading Portfolio ---
        </h2>
        <div style={{ width: "420px", height: "6px", background: "#262626", borderRadius: "9999px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: "#60a5fa",
            borderRadius: "9999px",
            width: `${progress}%`,
            transition: "width 0.2s ease"
          }} />
        </div>
        <p style={{ color: "#a3a3a3", marginTop: "24px", fontSize: "14px" }}>
          {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}

export default ProjectLoading;