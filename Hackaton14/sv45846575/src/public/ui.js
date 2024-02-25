import{saveNote} from "./socket.js";

const notesList= document.querySelector('#notes')

export const renderNotes= notes => {

    notes.forEach(note=> {
notesList.innerHTML +='<div> <h1>${note.title}</h1> <p>${note.description}</p></div>'

})
    }
export const onHandleSubmit =(e)=> {

    e.preventDefault();

    saveNote(noteForm["title"].value,noteForm["description"].value);
    

};