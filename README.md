<p align="center">
  <img src="logo.png" alt="Maya AI Logo" width="128" height="128">
</p>

<h1 align="center">Maya AI</h1>

<p align="center">
  <img src="https://img.shields.shields.shields.shields.io/github/license/Joudacasa/Maya-AI?style=flat-square&color=5319e7" alt="License">
  <img src="https://img.shields.shields.shields.shields.io/github/stars/Joudacasa/Maya-AI?style=flat-square&color=5319e7" alt="Stars">
  <img src="https://img.shields.shields.shields.shields.io/github/forks/Joudacasa/Maya-AI?style=flat-square&color=5319e7" alt="Forks">
  <img src="https://img.shields.shields.shields.shields.io/github/issues/Joudacasa/Maya-AI?style=flat-square&color=5319e7" alt="Issues">
</p>

<p align="center">
  A complete, open-source AI assistant platform for creative workflows, built by Joudacasa.
</p>

---

## 🚀 Overview

Maya AI is a multimodal AI suite designed to simplify and accelerate the creative process. It integrates state-of-the-art text-to-image, music generation, and advanced coding assistance into a single, cohesive, and lightweight web interface.

Built for developers, artists, and creators, Maya provides a seamless, "local-first" experience where modular configuration meets high-performance inference.

## ✨ Key Features

-   💻 **Advanced Coding Assistance:** Powered by Qwen-2.5-Coder and Llama 3.2 for complex logic and syntax generation.
-   🎨 **Multimodal Creation:** Direct integration with text-to-image and music generation pipelines.
-   🔒 **Privacy-by-Design:** Modular architecture separates sensitive API keys into an ignored `config.js` file.
-   ⚡ **Lightweight UI:** Optimized for performance, responsiveness, and easy deployment.
-   🌐 **Provider Support:** Connects to Groq.

## 🛠️ Technology Stack

-   **Frontend:** HTML5, CSS3, JavaScript (ES6+ Módules).
-   **Design:** Vector Assets (SVG) designed in Figma.
-   **Development:** VS Code (Trae).

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Joudacasa/Maya-AI.git](https://github.com/Joudacasa/Maya-AI.git)
    cd Maya-AI
    ```

2.  **Configure your API Keys:**
    -   Create a new file named `config.js` in the root directory.
    -   Add your keys using the following structure:
        ```javascript
        export const HARDCODED_KEYS = {
            groq: 'your_groq_key_here',
        };
        ```
    -   *Maya will automatically load these keys when running locally.*

3.  **Run the project:**
    -   We recommend using the **Live Server** extension in VS Code. Right-click on `index.html` and select "Open with Live Server".
    -   Alternatively, use any local HTTP server (e.g., `python -m http.server 8000`).

## 🤝 Contributing

This is an **Open Source** project and contributions are welcome! If you have ideas for new features, better UI, or additional AI model integrations, feel free to:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m
