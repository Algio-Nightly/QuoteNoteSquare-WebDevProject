# QuoteNote^2

QuoteNote^2 is a feature-rich, web-based note-taking application designed to make capturing and managing your thoughts effortless. It combines traditional text entry with modern speech capabilities, allowing you to dictate notes and have them read back to you.

## Features

*   **📝 Create & Save Notes:** Easily draft notes with a title and content, and save them for later.
*   **💾 Local Storage Persistence:** Your notes are saved directly to your browser's Local Storage, ensuring they remain available even after you refresh the page.
*   **🎤 Speech-to-Text:** Use the built-in speech recognition to dictate your notes hands-free.
*   **🔊 Text-to-Speech:** Have your notes read aloud to you with a single click.
*   **📋 Clipboard Integration:** Quickly copy your note content to the clipboard or paste text from other sources.
*   **🗑️ Manage Notes:** View all your saved notes in a dedicated section and delete the ones you no longer need.
*   **🔔 Visual Feedback:** Instant popup notifications for actions like saving, copying, pasting, and recording.

## Technologies Used

*   **HTML5:** For the structural foundation of the application.
*   **CSS3:** For styling, including custom properties, flexbox layouts, and responsive design.
*   **JavaScript:** For application logic, DOM manipulation, and API integrations.
    *   **Web Speech API:** For Speech Recognition and Speech Synthesis.
    *   **Clipboard API:** For copy and paste functionality.
    *   **Local Storage API:** For persisting data.

## Getting Started

To run this project locally, simply clone the repository and open the `index.html` file in your web browser.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd QuoteNote2
    ```
3.  **Open `index.html`:**
    Double-click `index.html` or open it with your preferred browser.

## Usage Guide

1.  **Typing a Note:**
    *   Enter a title in the "Title" box.
    *   Type your note in the "Enter Text Here" area.
    *   Click the **Save** icon (floppy disk) to save your note.

2.  **Using Speech-to-Text:**
    *   Click the **Microphone** icon to start recording.
    *   Speak clearly into your microphone.
    *   Click the microphone icon again to stop recording.

3.  **Using Text-to-Speech:**
    *   Click the **Speaker** icon to hear the current note content read aloud.

4.  **Managing Notes:**
    *   Scroll down to the "My QuoteNotes" section to see your saved notes.
    *   Click the **Trash Can** icon on any note to delete it.

## Browser Compatibility

This application relies on modern web APIs (Web Speech API). For the best experience, use **Google Chrome**, **Microsoft Edge**, or other Chromium-based browsers. Additionally Opera Browser may have some compatibility issues with the speech-to-text feature.
