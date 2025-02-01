# BharatFD-Backend-Assignment
FAQ Management System
A simple FAQ management system built using Node.js, Express, and MongoDB.

Working Project video  - https://www.youtube.com/watch?v=8oX1CStXjFs

Features

Add, view, and delete FAQs.

Uses MongoDB for data storage.

EJS templating engine for rendering views.

RESTful API endpoints for managing FAQs.

Installation

Prerequisites

Ensure you have the following installed:

Node.js

MongoDB

Steps

Clone the repository:

git clone https://github.com/your-username/faq-management.git
cd faq-management

Install dependencies:

npm install

Start MongoDB (if not already running):

mongod

Start the server:

npm start

Open your browser and navigate to:

http://localhost:8000

API Endpoints

Fetch all FAQs

GET /api/faqs

Add a new FAQ

POST /api/faqs
Content-Type: application/json
Body:
{
  "question": "Your question?",
  "answer": "The answer."
}

Delete an FAQ

DELETE /api/faqs/:id

Project Structure

faq-management/
├── routes/
│   ├── faq.js         # FAQ API routes
├── views/
│   ├── login.ejs      # Login page
│   ├── admin.ejs      # Admin page
│   ├── faqpage.ejs    # FAQ display page
├── models/
│   ├── faq.js         # FAQ schema (not included in uploads)
├── connection.js      # MongoDB connection logic
├── index.js           # Main server file
├── package.json       # Project dependencies
└── README.md          # Documentation

License

This project is licensed under the MIT License.

Author

Your Name
Ashwani Agrawal
