import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/account-settings");
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Create your <br /> PopX account
        </h2>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Full Name <span style={styles.star}>*</span>
          </label>
          <input type="text" placeholder="Marry Doe" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Phone number <span style={styles.star}>*</span>
          </label>
          <input type="text" placeholder="Marry Doe" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Email address <span style={styles.star}>*</span>
          </label>
          <input type="email" placeholder="Marry Doe" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Password <span style={styles.star}>*</span>
          </label>
          <input type="password" placeholder="Marry Doe" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Company name</label>
          <input type="text" placeholder="Marry Doe" style={styles.input} />
        </div>

        <div style={styles.radioContainer}>
          <label style={styles.label}>
            Are you an Agency? <span style={styles.star}>*</span>
          </label>
          <div>
            <label style={styles.radioLabel}>
              <input type="radio" name="agency" value="yes" defaultChecked style={styles.radio} /> Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="agency" value="no" style={styles.radio} /> No
            </label>
          </div>
        </div>

        <button style={styles.createButton} onClick={handleSignup}>Create Account</button>
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
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "left",
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
  star: {
    color: "#DD4A3D",
  },
  input: {
    width: "90%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "3px",
  },
  radioContainer: {
    width: "100%",
    marginBottom: "10px",
  },
  radioLabel: {
    fontSize: "14px",
    marginRight: "10px",
  },
  radio: {
    marginRight: "5px",
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
    marginTop: "10px",
  },
};

export default Signup;
