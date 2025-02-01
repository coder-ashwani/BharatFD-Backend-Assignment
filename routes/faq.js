const express = require("express");
const router = express.Router();
const FAQ = require("../models/faq");

router.get("/", (req, res) => {
    res.status(200).render("admin");
  });


// this route will fetch all faqs
router.get("/faqs", async (req, res) => {
  try {
    //fetching all faqs from the database
    const faqs = await FAQ.find({});
    res.status(200).render("faqpage", { faqs });
  } catch (error) {
    res.status(500).render("faqpage", { faqs: [] });
  }
});




router.post("/faqs", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFAQ = await FAQ.create({
      question,
      answer
    });
    console.log(newFAQ);
    res.status(201).json({
      status: "success",
      data: newFAQ
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
});

// this route will delete a faq
router.delete("/faqs/:id", async (req, res) => {
  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
    if (!deletedFAQ) {
      return res.status(404).json({
        status: "error",
        message: "FAQ not found"
      });
    }
    res.status(200).json({
      status: "success",
      message: "FAQ deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: "error", 
      message: error.message
    });
  }
});

module.exports = router;
