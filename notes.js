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

console.log(notes);