from flask import Flask, request, jsonify
import pyttsx3
from twilio.rest import Client
import smtplib
import os
import subprocess
import requests
import telethon.sync
from telethon import TelegramClient
import instabot
import json
from flask import Flask, request, jsonify
import subprocess
from googlesearch import search
import art


app = Flask(__name__)

# Twilio configuration
TWILIO_ACCOUNT_SID = 'AC96a802982efe963b730e44fc203e6f8d'
TWILIO_AUTH_TOKEN = 'b36843b188808dcd3307190dc9a00503'
TWILIO_WHATSAPP_NUMBER = 'whatsapp:++14155238886'  # Twilio's WhatsApp sandbox number
TWILIO_PHONE_NUMBER = '+12202355382'
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Add your bot token here for Telegram
TELEGRAM_API_ID = 'your_telegram_api_id'
TELEGRAM_API_HASH = 'your_telegram_api_hash'
TELEGRAM_PHONE = 'your_phone_number'
TELEGRAM_CHANNEL = 'your_channel_name'
telegram_client = TelegramClient(TELEGRAM_PHONE, TELEGRAM_API_ID, TELEGRAM_API_HASH)

# For Instagram
INSTAGRAM_USERNAME = 'your_instagram_username'
INSTAGRAM_PASSWORD = 'your_instagram_password'
bot = instabot.Bot()

# Text-to-Speech
engine = pyttsx3.init()

@app.route('/send_whatsapp', methods=['POST'])
def send_whatsapp():
    data = request.json
    message = client.messages.create(
        from_=TWILIO_WHATSAPP_NUMBER,
        body=data['hiii buddy how are you'],
        to=f"whatsapp:{data['to']}"
    )
    return jsonify({"status": "Message sent", "sid": message.sid})

@app.route('/speak', methods=['POST'])
def speak():
    data = request.json
    engine.say(data['text'])
    engine.runAndWait()
    return jsonify({"status": "Spoken"})

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.json
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(data['email'], data['password'])
    server.sendmail(
        data['email'],
        data['to'],
        f"Subject: {data['subject']}\n\n{data['message']}"
    )
    server.quit()
    return jsonify({"status": "Email sent"})

@app.route('/send_sms', methods=['POST'])
def send_sms():
    data = request.json
    message = client.messages.create(
        from_=TWILIO_PHONE_NUMBER,
        body=data['message'],
        to=data['to']
    )
    return jsonify({"status": "Message sent", "sid": message.sid})
@app.route('/post_telegram', methods=['POST'])
def post_telegram():
    data = request.json
    with telegram_client:
        telegram_client.send_message(TELEGRAM_CHANNEL, data['message'])
    return jsonify({"status": "Posted to Telegram"})

@app.route('/post_instagram', methods=['POST'])
def post_instagram():
    data = request.json
    bot.login(username=INSTAGRAM_USERNAME, password=INSTAGRAM_PASSWORD)
    bot.upload_photo(data['image_path'], caption=data['caption'])
    return jsonify({"status": "Posted to Instagram"})

@app.route('/post_discord', methods=['POST'])
def post_discord():
    data = request.json
    webhook_url = data['webhook_url']
    payload = {
        "content": data['message']
    }
    headers = {
        "Content-Type": "application/json"
    }
    response = requests.post(webhook_url, data=json.dumps(payload), headers=headers)
    return jsonify({"status": "Posted to Discord", "response": response.text})

@app.route('/post_facebook', methods=['POST'])
def post_facebook():
    data = request.json
    # This example assumes using selenium to automate the login and posting process
    # Implementation here would require more detailed setup with Selenium
    # Please reach out if you need help setting this up
    return jsonify({"status": "Posted to Facebook (simulation)"})

@app.route('/change_ls_colors', methods=['POST'])
def change_ls_colors():
    data = request.json
    color_settings = data['colors']
    with open(os.path.expanduser('~/.bashrc'), 'a') as bashrc:
        bashrc.write(f"LS_COLORS={color_settings}\nexport LS_COLORS\n")
    subprocess.run(["source", os.path.expanduser("~/.bashrc")], shell=True)
    return jsonify({"status": "LS_COLORS changed"})

@app.route('/read_ram', methods=['GET'])
def read_ram():
    with open('/proc/meminfo', 'r') as meminfo:
        memory_info = meminfo.read()
    return jsonify({"memory_info": memory_info})

@app.route('/change_gnome_terminal', methods=['POST'])
def change_gnome_terminal():
    data = request.json
    profile_id = data['profile_id']
    key = data['key']
    value = data['value']
    subprocess.run(["dconf", "write", f"/org/gnome/terminal/legacy/profiles:/:{profile_id}/{key}", value], shell=True)
    return jsonify({"status": "GNOME Terminal profile changed"})

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    username = data['username']
    password = data['password']
    subprocess.run(['sudo', 'useradd', '-m', username])
    subprocess.run(['echo', f"{username}:{password}", '|', 'sudo', 'chpasswd'])
    return jsonify({"status": "User created and password set"})

# Google Search from Terminal
@app.route('/google_search', methods=['GET'])
def google_search():
    query = request.args.get('query')
    results = list(search(query, num_results=5))
    return jsonify({"results": results})

# Run Windows Software on Linux
@app.route('/run_windows_software', methods=['POST'])
def run_windows_software():
    data = request.json
    executable_path = data['executable_path']
    subprocess.run(['wine', executable_path])
    return jsonify({"status": "Software executed"})

# Sync Two Folders
@app.route('/sync_folders', methods=['POST'])
def sync_folders():
    data = request.json
    source_folder = data['source_folder']
    destination_folder = data['destination_folder']
    subprocess.run(['rsync', '-avz', source_folder, destination_folder])
    return jsonify({"status": f"Synced {source_folder} to {destination_folder}"})

# Convert Text to ASCII Art
@app.route('/ascii_art', methods=['POST'])
def ascii_art():
    data = request.json
    text = data['text']
    ascii_result = art.text2art(text)
    return jsonify({"ascii_art": ascii_result})

if __name__ == '__main__':
    app.run(debug=True)
