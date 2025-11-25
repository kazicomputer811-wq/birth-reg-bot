const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/birth-reg", (req, res) => {
  const { name, father, mother, dob, upazila } = req.body;

  if (!name || !father || !mother || !dob || !upazila) {
    return res.json({ error: "সব ঘর পূরণ করুন!" });
  }

  return res.json({
    message: "Birth Registration সফলভাবে সম্পন্ন হয়েছে!",
    data: { name, father, mother, dob, upazila }
  });
});

app.get("/", (req, res) => {
  res.send("Birth-Reg Bot Server Running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
