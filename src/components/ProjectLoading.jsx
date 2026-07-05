function ProjectLoading({ progress }) {
  const offsetY = 0;
  const offsetX = 0;

  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const isComplete = clampedProgress >= 100;

  return (
    <div
      style={{
        width: "270px",
        height: "254px",
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        <h2
          style={{
            color: "#d4d4d4",
            fontSize: "12px",
            marginBottom: "32px",
            letterSpacing: "0.08em",
            fontWeight: "500",
          }}
        >
          Loading Portfolio
        </h2>

        <div
          style={{
            width: "190px",
            height: "5px",
            background: "#242222",
            borderRadius: "9999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${clampedProgress}%`,
              height: "100%",
              background: "#60a5fa",
              borderRadius: "9999px",
            }}
          />
        </div>

        <p
          style={{
            color: "#a3a3a3",
            marginTop: "18px",
            fontSize: "10px",
            letterSpacing: "0.08em",
            fontWeight: "500",
          }}
        >
          {isComplete ? "WELCOME" : `${Math.floor(clampedProgress)}%`}
        </p>
      </div>
    </div>
  );
}

export default ProjectLoading;