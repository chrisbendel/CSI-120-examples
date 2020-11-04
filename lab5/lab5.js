window.onload = () => {
    let arr = [1, 2, 3];
    let obj = {
        thing: "value",
        otherThing: 5
    };

    let objectArray = [
        {
            title: "Moby Dick",
            author: "",
            alreadyRead: true,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
        },
        {
            title: "Moby Dick",
            author: "",
            alreadyRead: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
        },
        {
            title: "Moby Dick",
            author: "",
            alreadyRead: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
        },
    ];

    for (let i = 0; i < objectArray.length; i++) {

    }

    objectArray.forEach(book => {
        if (book.alreadyRead) {
            console.log(`You've already ready ${book.title} by ${book.author}`);
        } else {
            console.log(`You haven't read ${book.title} by ${book.author}`);
        }
    });
}