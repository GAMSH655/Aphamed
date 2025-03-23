import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000", // Adjust if needed
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
