const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let slots = [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "occupied" },
  { id: 4, status: "available" },
  { id: 5, status: "occupied" }
];

// Get all slots
app.get("/slots", (req, res) => {
  res.json(slots);
});

// Toggle slot status
app.post("/toggle/:id", (req, res) => {
  const id = parseInt(req.params.id);

  slots = slots.map(slot => {
    if (slot.id === id) {
      return {
        ...slot,
        status: slot.status === "available" ? "occupied" : "available"
      };
    }
    return slot;
  });

  res.json({ message: "Slot updated" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
