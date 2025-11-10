import express from "express";
const app = express();
app.use(express.json());

// Asosiy POST marshruti (ESP32 yuboradi)
app.post("/post", (req, res) => {
  console.log("Kelgan ma'lumot:", req.body);
  res.status(200).json({
    status: "success",
    message: "Ma'lumot qabul qilindi",
    received: req.body
  });
});

// Sinov uchun GET so‘rov
app.get("/", (req, res) => {
  res.send("ESP32 server ishlayapti!");
});

// Render avtomatik PORT beradi
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server ${PORT}-portda ishlayapti`));
