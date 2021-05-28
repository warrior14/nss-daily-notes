const notes = [
    {
        id: 1,
        subject: "git terminal",
        date: "May 20, 2021",
        feeling: "It felt very hard to comprehend and memorized. But through repetitions I feel a bit more comfortable with it.",
        timeSpent: 1800
    },
    {
        id: 2,
        subject: "html and css",
        date: "May 20, 2021",
        feeling: "It seemed relatively easy and very fun to dive into! Unlike other subjects ...",
        timeSpent: 3000
    }
];


// console.log(notes);


// Adding a new note exercise 

const noteAboutToday = {
    id: 3,
    subject: "The push method",
    date: "May 27 2021",
    feeling: "It was a very nice addition to my knowledge ... pun intended.",
    timeSpent: 10
};

notes.push(noteAboutToday);

// console.log(notes);

// Displaying Your Note Journal Exercise 

// for (const note of notes) {
//     console.log(`Note ${note.id}
// I was learning ${note.subject}
// The minutes I spent studying was ${note.timeSpent}
// What I felt during this was: ${note.feeling}.`)
// };



//  Finding a note exercise using a for of loop with if statement

// const searchTerm = 10

// for (const note of notes) {
//     if (note.timeSpent === searchTerm) {
//         console.log(note);
//     };
// };


// Writing New Note with no Id exercise 

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const newNoteId = maxId + 1
    note.id = newNoteId
    notes.push(note)
    note.dateCreated = new Date().toLocaleString();
}

const newerNote = {
    subject: "Functions",
    date: "May 28, 2021",
    feeling: "It was hard to understand at first, but I think I am getting it.",
    timeSpent: 10
};


createNote(newerNote);

    for (const note of notes) {
    console.log(`Note ${note.id}
    I was learning ${note.subject}
    The minutes I spent studying was ${note.timeSpent}
    What I felt during this was: ${note.feeling}.`);
};


console.log(notes);