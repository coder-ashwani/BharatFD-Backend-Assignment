const express = require("express");
const app = express();
const faqRoutes = require("./routes/faq");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set("views",path.resolve("views"));
 

//connection
const {connectmongodb} = require("./connection")
connectmongodb("mongodb://127.0.0.1:27017/faqassignmentnew")

app.get("/", (req, res) => {
  res.render("login");
});

app.use("/api", faqRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port 8000`);
});

// setTimeout(server, 10000);
