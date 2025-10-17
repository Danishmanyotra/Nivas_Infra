import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <motion.section
initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}} 

      className="vision-section"
      style={{
        padding: "50px 0",
        marginTop: "50px",
        background: "linear-gradient(145deg, #fdf6e3 0%, #fff9f0 60%, #fdf6e3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 25% 25%, rgba(180, 145, 65, 0.08) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      ></div>

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            color: "#b48a43",
            marginBottom: "30px",
            fontFamily: "'GFS Didot', serif",
            textTransform: "uppercase",
            letterSpacing: "1.8px",
            position: "relative",
            display: "inline-block",
          }}
        >
          Our Vision
          <span
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70px",
              height: "4px",
              background: "linear-gradient(90deg, #b48a43, #ffd700)",
              borderRadius: "2px",
            }}
          ></span>
        </h2>

        {/* Main Text */}
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "#5a4d3a",
            maxWidth: "800px",
            margin: "0 auto 35px auto",
            padding: "0 20px",
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          At Nivas Infra, we strive to redefine the real estate experience in India by delivering tailored, insight-driven solutions. Our mission is to empower every client with confidence, clarity, and unmatched opportunities, transforming investments into enduring legacies and creating homes that reflect refined lifestyles.
        </p>

        {/* Quote Box */}
        <div
          style={{
            background: "#fff7e5",
            padding: "30px 35px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            position: "relative",
            borderLeft: "5px solid #b48a43",
            margin: "0 20px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: "2.8rem",
              color: "#b48a43",
              fontFamily: "'GFS Didot', serif",
              opacity: 0.8,
              lineHeight: 1,
              marginBottom: "18px",
            }}
          >
            “
          </div>
          <p
            style={{
              fontSize: "1.22rem",
              lineHeight: 1.55,
              color: "#4b3f2e",
              fontStyle: "italic",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            Real estate thrives on trust, innovation, and meaningful experiences — and at Nivas Infra, we are dedicated to building that legacy for every client.
          </p>
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontSize: "0.95rem",
                color: "#b48a43",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Management, Nivas Infra
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Vision;
