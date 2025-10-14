# 🍽️ MenuBase — A Multi-Functional Automation Platform

## 📌 Project Overview
**MenuBase** is a Flask-based automation platform that brings together multiple system and social media tools into a single unified interface.  
It allows users to perform operations such as sending WhatsApp/SMS messages, emails, managing users, performing Google searches, reading system memory, posting to social media, and even customizing Linux terminal settings — all via REST APIs.

This project was developed as part of the **LinuxWorld Internship Program** under the mentorship of **Vimal Daga Sir**.

---

## 🧠 Features
MenuBase provides a variety of functionalities through different endpoints:

### 📱 Communication
- **Send WhatsApp Messages** using Twilio API  
- **Send SMS** messages through Twilio  
- **Send Emails** via Gmail SMTP  
- **Text-to-Speech** conversion using `pyttsx3`

### 🌐 Social Media Automation
- **Post on Telegram Channels** using Telethon  
- **Upload Photos on Instagram** using Instabot  
- **Post Messages to Discord** via Webhooks  
- **Simulate Facebook Posts** (future feature)

### 🧰 System Administration Tools
- **Create new Linux users** with passwords  
- **Change GNOME terminal themes** using `dconf`  
- **Change `LS_COLORS`** settings dynamically  
- **Read system RAM information** from `/proc/meminfo`  
- **Run Windows software on Linux** using Wine  
- **Synchronize folders** using `rsync`  

### 🔎 Utilities
- **Google Search** directly from the terminal  
- **Generate ASCII Art** using the `art` library

---

## 🏗️ Tech Stack
- **Language:** Python  
- **Framework:** Flask  
- **APIs Used:** Twilio, Telegram, Discord, Instagram  
- **Libraries:**  
  - `flask` – Web framework  
  - `pyttsx3` – Text-to-speech  
  - `twilio` – WhatsApp/SMS API  
  - `smtplib` – Email handling  
  - `telethon` – Telegram API  
  - `instabot` – Instagram automation  
  - `requests`, `subprocess`, `art`, `googlesearch` – Utilities  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Project
```bash
git clone https://github.com/yourusername/menubase.git
cd menubase
2️⃣ Install Dependencies
bash
Copy code
pip install flask twilio pyttsx3 telethon instabot requests art googlesearch-python
3️⃣ Configure API Credentials
Edit the following values in the Python file:

python
Copy code
TWILIO_ACCOUNT_SID = "your_twilio_sid"
TWILIO_AUTH_TOKEN = "your_twilio_token"
TWILIO_PHONE_NUMBER = "your_twilio_phone_number"

TELEGRAM_API_ID = "your_telegram_api_id"
TELEGRAM_API_HASH = "your_telegram_api_hash"
TELEGRAM_PHONE = "your_phone_number"
TELEGRAM_CHANNEL = "your_channel_name"

INSTAGRAM_USERNAME = "your_instagram_username"
INSTAGRAM_PASSWORD = "your_instagram_password"
🚀 Run the Application
bash
Copy code
python app.py
Then open your browser or use Postman to test the endpoints at:

cpp
Copy code
http://127.0.0.1:5000/
📡 Example API Endpoints
📨 1. Send WhatsApp Message
Endpoint: /send_whatsapp
Method: POST
Request Body:

json
Copy code
{
  "to": "+9198XXXXXXXX",
  "message": "Hello from MenuBase!"
}
🔉 2. Text-to-Speech
Endpoint: /speak
Method: POST
Request Body:

json
Copy code
{
  "text": "Welcome to MenuBase!"
}
💌 3. Send Email
Endpoint: /send_email
Method: POST
Request Body:

json
Copy code
{
  "email": "sender@gmail.com",
  "password": "yourpassword",
  "to": "receiver@gmail.com",
  "subject": "Test Email",
  "message": "This is a test email from MenuBase."
}
💾 4. Read RAM Information
Endpoint: /read_ram
Method: GET
Description: Returns details of system memory from /proc/meminfo.

🔍 5. Google Search
Endpoint: /google_search?query=linux automation
Method: GET
Response: Top 5 search results for the given query.

🧩 6. Convert Text to ASCII Art
Endpoint: /ascii_art
Method: POST
Request Body:

json
Copy code
{
  "text": "MenuBase"
}
🔐 Security Note
Store API credentials and passwords securely using environment variables.

Do not commit your Twilio, Telegram, or Gmail credentials to public repositories.

Use application-specific passwords for Gmail if 2FA is enabled.

💡 Future Enhancements
Integration with Facebook API for real posting

Add GUI dashboard using Flask templates

Include system monitoring graphs

Dockerize the project for deployment

👨‍💻 Author
Name: Yug Pratap
Project: MenuBase — Flask-based Automation Tool
Internship: LinuxWorld Informatics Pvt. Ltd.
Mentor: Vimal Daga Sir

🏁 Conclusion
MenuBase is an all-in-one automation project designed to demonstrate integration between Python Flask, system utilities, and external APIs.
It showcases practical knowledge of Linux automation, Flask REST API, and DevOps tools — providing a solid foundation for real-world system administration and AI-assisted automation workflows.

yaml
Copy code
