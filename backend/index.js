import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes.js';
// import certificateRoutes from './routes/certificateRoutes.js';
// import resumeRoutes from './routes/resumeRoutes.js';

// dotenv.config();

const app = express();
// app.use(express.json());
// app.use(cors());

// Database connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log("Database connection error:", error));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/certificates", certificateRoutes);
// app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
