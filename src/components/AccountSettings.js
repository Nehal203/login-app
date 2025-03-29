import React from "react";

const AccountSettings = () => {
    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <h2 style={styles.title}>Account Settings</h2> {/* ✅ Title ko upar shift kiya */}
                <div style={styles.profile}>
                    <img src="/profile.jpg" alt="Profile" style={styles.profileImage} />
                    <div>
                        <h3 style={styles.name}>Marry Doe</h3>
                        <p style={styles.email}>Marry@Gmail.com</p>
                    </div>
                </div>
                <p style={styles.description}>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                    Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
                    Sed Diam
                </p>
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
        height: "450px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        padding: "20px",
        backgroundColor: "#FFFFFF", // ✅ Background color white
        justifyContent: "flex-start", // ✅ Content ko upar shift kiya
    },
    title: {
        fontSize: "18px",
        fontWeight: "normal", // ✅ Bold hataya
        marginBottom: "10px",
        alignSelf: "flex-start", // ✅ Title left se start hoga
        marginTop: "0px", // ✅ Top pe shift kiya
        paddingBottom: "5px", // ✅ Line aur title ke beech gap halka
        borderBottom: "1px solid #E0E0E0", // ✅ Bilkul patli si halka grey color ki line
        width: "100%", // ✅ Full width me line dikhayega
        backgroundColor: "white", // ✅ Pure white background
    },
    
    
    profile: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
    },
    profileImage: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        marginRight: "10px",
    },
    name: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    email: {
        fontSize: "14px",
        color: "#555",
    },
    description: {
        textAlign: "left",
        fontSize: "13px",
        color: "#777",
        maxWidth: "100%",
        width: "100%",
    },
};

export default AccountSettings;
