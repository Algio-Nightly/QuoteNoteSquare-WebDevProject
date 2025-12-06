const mainCont = document.querySelector(".main-cont")
const titleArea = document.querySelector(".title-area")
const contentArea = document.querySelector(".content-area")
const copyBtn = document.querySelector(".copy")
const pasteBtn = document.querySelector(".paste")
const speechBtn = document.querySelector(".speech")
const saveBtn = document.querySelector(".save")
const speakerBtn = document.querySelector(".speaker")
const notesBox = document.querySelector(".notes-box")
const popup = document.querySelector(".popup")

const popupShow = (text) => {
    popup.classList.add("not-hidden")
    popup.classList.remove("hidden")
    setTimeout(() => {
        popup.classList.remove("not-hidden")
        popup.classList.add("hidden")
    }, 2000);
    popup.innerHTML = "<center>" + text + "</center>"
}
// Local Storage Notes Saving
let notesArr;
const displayNotes = () => {
    notesBox.innerHTML = ""
    notesArr.forEach(note => {
        let noteCont = document.createElement("div")
        noteCont.classList.add("note")
        noteCont.id = note.id
        noteCont.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
            <button class="button delete">
                <img class="icons" src="assets/icons/delete.png" alt="Delete">
            </button>
        `
        notesBox.appendChild(noteCont)
    })
}

saveBtn.addEventListener("click", () => {
    let id = generateID()
    saveNote(id)
    displayNotes()
})
const saveNote = (id) => {
    let note = {
        id: id,
        title: titleArea.value || "Untitled Note",
        content: contentArea.value || "No Content"
    }

    titleArea.value = ""
    contentArea.value = ""
    notesArr.unshift(note)
    popupShow("Note Saved")
    localStorage.setItem("notes", JSON.stringify(notesArr))
}

const generateID = () => Math.floor(Math.random() * 10000)

function initNotes() {
    notesArr = JSON.parse(localStorage.getItem("notes") || "[]");
    displayNotes()
}
initNotes()

// For Clearning Local Storage
// localStorage.setItem("notes", JSON.stringify([]))

// Clipboard Feature

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(contentArea.value)
    popupShow("Copied Note Text")
})
pasteBtn.addEventListener("click", () => {
    navigator.clipboard.readText().then(text => {
        contentArea.value += text
    })
    popupShow("Pasted Note Text")
})

// Speech Recognition Feature
let recordingStart = false;
const speech = window.SpeechRecognition || window.webkitSpeechRecognition
if (!speech) {
    popupShow("Your Browser does not support Speech Recognition")
}
const speechRecognition = new speech()
speechRecognition.continuous = true
speechRecognition.lang = "en-US"
speechRecognition.interimResults = true
speechBtn.addEventListener("click", () => {
    if (recordingStart == false) {
        recordingStart = true;
        speechRecognition.start()
    } else {
        recordingStart = false;
        speechRecognition.stop()
        popupShow("Recording Stopped")
    }
})

speechRecognition.onresult = (event) => {
    // let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            let transcript = event.results[i][0].transcript + ". ";
            transcript.trim(" ");
            transcript = i == 0 ? transcript[0].toUpperCase() + transcript.slice(1) : transcript[1].toUpperCase() + transcript.slice(2)
            contentArea.value += transcript;
        }
    }
}


speechRecognition.onstart = () => { popupShow("Recording Started") }
speechRecognition.onend = () => { popupShow("Recording Stopped") }
speechRecognition.onerror = (event) => {
    popupShow("Error: " + event.error);
};

// Delete Button
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        let noteId = e.target.parentElement.id
        notesArr = notesArr.filter(note => note.id != noteId)
        localStorage.setItem("notes", JSON.stringify(notesArr))
        displayNotes()
        popupShow("Note Deleted")
    } if (e.target.parentElement.classList.contains("delete")){
        let noteId = e.target.parentElement.parentElement.id
        notesArr = notesArr.filter(note => note.id != noteId)
        localStorage.setItem("notes", JSON.stringify(notesArr))
        displayNotes()
        popupShow("Note Deleted")
    }
})

// Speaker Button
speakerBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(contentArea.value)
    speechSynthesis.speak(utterance)
})
