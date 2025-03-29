import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Welcome to PopX</h2>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
          <button style={styles.createButton} onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button style={styles.loginButton} onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#F8F9FA",
  },
  container: {
    width: "320px",
    height: "90vh",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    textAlign: "left",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "20px",
  },
  createButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#6C25FF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#6C25FF4B",
    color: "#6A0DAD",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Welcome;
