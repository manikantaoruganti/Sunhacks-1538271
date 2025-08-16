// Express server entrypoint
// Generated at 2025-08-16
const express = require("express");
const app = express();
app.get("/", (req,res)=>res.send("SkillSphereAI Server Running - 2025-08-16 "));
app.listen(3000, ()=>console.log("Server started on port 3000"));
