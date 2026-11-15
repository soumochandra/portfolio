# 👁️ VisionTrack – Intelligent Face Detection System

**VisionTrack** is a Python-based desktop application that uses Computer Vision and OpenCV to perform real-time face, eye, and smile detection through a webcam. It features a Tkinter GUI, voice feedback, and face image capturing for an interactive detection experience.

## 🚀 Key Features

- **Real-Time Face Detection:** Detects multiple faces using Haar Cascade Classifiers.
- **Eye Detection:** Identifies and highlights detected eyes.
- **Smile Detection:** Detects smiles and provides basic expression feedback.
- **Voice Feedback:** Uses text-to-speech to announce smile detection.
- **Face Capture:** Captures and saves detected face images locally.
- **Interactive GUI:** Simple desktop interface with Start, Stop, Save, and Exit controls.
- **Multithreading:** Runs detection in a separate thread for responsive GUI interaction.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Programming Language | Python |
| Computer Vision | OpenCV |
| GUI Development | Tkinter |
| Detection Algorithm | Haar Cascade Classifier |
| Voice Feedback | pyttsx3 |
| Image Processing | OpenCV |

## 🏗️ System Architecture

VisionTrack follows a modular desktop application architecture.

```text
       USER INTERACTION
              |
              ▼
        TKINTER GUI
              |
              ▼
       WEBCAM CAPTURE
              |
              ▼
      OPENCV PROCESSING
              |
       ┌──────┼───────┐
       ▼      ▼       ▼
     FACE    EYE    SMILE
  DETECTION DETECTION DETECTION
       |      |       |
       └──────┼───────┘
              |
       ┌──────┴──────┐
       ▼             ▼
  VISUAL OUTPUT   VOICE FEEDBACK
       |
       ▼
  SAVE FACE IMAGES
```

## 📂 Project Structure

```text
VisionTrack/
│
├── face_detect.py       # Main application logic
├── README.md            # Project documentation
└── .gitattributes       # Git configuration
```

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/soumochandra/Gui-version-of-face-detection-on-pthon.git

cd Gui-version-of-face-detection-on-pthon
```

**2. Install dependencies**

```bash
pip install opencv-python pyttsx3
```

**3. Run the application**

```bash
python face_detect.py
```

**4. Allow webcam access**

Ensure your webcam is connected and accessible before starting detection.

## 🧠 Core Concepts Implemented

- Computer Vision and Real-Time Image Processing
- Haar Cascade Object Detection
- Facial Feature Detection
- GUI-Based Application Development
- Multithreading and Event Handling
- Text-to-Speech Integration
- Image Capture and File Handling

## 🎯 Project Objectives

- Explore practical applications of Computer Vision.
- Implement real-time facial feature detection.
- Develop an interactive Python desktop application.
- Integrate visual detection with voice-based feedback.

## 👨‍💻 Developer

**Soumo Chandra**

- GitHub: [@soumochandra](https://github.com/soumochandra)
- Repository: [VisionTrack – Face Detection](https://github.com/soumochandra/Gui-version-of-face-detection-on-pthon)

---

⭐ If you find this project useful, consider giving it a star!
