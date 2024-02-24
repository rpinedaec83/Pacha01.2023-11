import Note from './models/Note';

export default (io)=> {
    io.on('connection',(socket)=> {
        
       const emiNote=async()=> { 
        const notes= await Note.find()
       io.emit('loadnotes',notes)
       }
       emiteNotes()
      
    })


}