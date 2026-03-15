from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route("/")
def home():
    return "Voice Secret Analyzer API Running"

@app.route("/analyze", methods=["POST"])
def analyze():

    if "video" not in request.files:
        return jsonify({"error":"no file uploaded"})

    video = request.files["video"]

    video_path = "video.mp4"
    video.save(video_path)

    text_detected = "เสียงที่ตรวจพบจากวิดีโอ"
    morse_detected = "... --- ..."

    return jsonify({
        "speech": text_detected,
        "morse": morse_detected
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
