/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

const shanda =
{
    name: 'Shanda Aurich',
    photo: '/images/image.jpg',
    favoriteFoods: ["Dr. Pepper", " chocolate", " tacos", " carbs", " ice cream", "pizza"],
    hobbies: ['running', 'homework', 'playing with my kids', 'videogames', 'watching movies'],
    placesLived: [{
        place: 'LasVegas',
        length: '3 yrs'
    },
    {
        place: 'Reno',
        length: '9 yrs'
    },
    {
        place: 'Bountiful',
        length: '2 yrs'
    },
    {
        place: 'LasVegas',
        length: '5 yrs'
    },
    {
        place: 'Seattle',
        length: '22 yrs'
    }]
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

myName = document.getElementById('name');
myName.innerHTML = shanda.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

myPhoto = document.getElementById('photo');
myPhoto.setAttribute('src', shanda.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

photoAlt = document.getElementById('photo');
photoAlt.setAttribute('alt', shanda.name);


// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const foods = shanda.favoriteFoods.map(
    (food) => `<li>${food}</li>`
);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.getElementById("favorite-foods").innerHTML = foods.join("");

// Step 6: Repeat Step 4 for each hobby in the hobbies property

const hobbies = shanda.hobbies.map(
    (hobby) => `<li>${hobby}</li>`
);
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

document.getElementById("hobbies").innerHTML = hobbies.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

function allPlacesLived(places) {
    const html = places.map(
        (place) =>
            `<dt>${place.place}</dt>
        <dd>${place.length}</dd>`
    )
    document.getElementById("places-lived").innerHTML = html.join("");
}

allPlacesLived(shanda.placesLived)