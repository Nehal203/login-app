import React, { useState } from "react";
import AccountSettings from "./AccountSettings"; 

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false); 

  if (loggedIn) {
    return <AccountSettings />; 
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Sign in to your <br /> PopX account
        </h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email Address</label>
          <input type="email" placeholder="Enter email address" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Password</label>
          <input type="password" placeholder="Enter password" style={styles.input} />
        </div>

        <button style={styles.loginButton} onClick={() => setLoggedIn(true)}>
          Login
        </button> 
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
    textAlign: "left",
    lineHeight: "1.3",
  },
  text: {
    fontSize: "14px",
    color: "#6c757d",
    textAlign: "left",
    marginBottom: "10px",
    lineHeight: "1.3",
  },
  inputContainer: {
    width: "100%",
    marginBottom: "10px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#6C25FF",
  },
  input: {
    width: "90%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "3px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#CBCBCB",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Login;
