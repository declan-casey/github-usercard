/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
console.log(axios);
axios.get('https://api.github.com/users/declan-casey')
.then((res) => {
  const cards = document.querySelector(".cards")
  cards.appendChild(markupMaker(res));
  const getData = res.data;
  console.log(getData);
})


.catch((problem) => {
  console.log(problem);
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",];

  followersArray.forEach(item => {
    axios.get(`https://api.github.com/users/${item}`)
  .then((res) => {
    const cards = document.querySelector(".cards")
    cards.appendChild(markupMaker(res));
    const getData = res.data;
    console.log(getData);
  })

  .catch((problem) => {
    console.log(problem);
  })
  })


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function markupMaker(obj){
  const cardDiv = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const myName = document.createElement("h3");
  const userName = document.createElement("p");
  const myLocation = document.createElement("p");
  const myProfile = document.createElement("p");
  const myGitAddress= document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  image.src = obj.data.avatar_url;
  myName.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  myLocation.textContent = `Location: ${obj.data.location}`;
  myProfile.textContent = "Profile: "
  myGitAddress.setAttribute("href", obj.data.url);
  myGitAddress.innerHTML = obj.data.url;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;

  cardDiv.appendChild(image);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(myName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(myLocation);
  cardInfo.appendChild(myProfile);
  myProfile.appendChild(myGitAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  cardDiv.classList.add("card");
  cardInfo.classList.add("card-info");
  myName.classList.add("name");
  userName.classList.add("username");

  // myGitAddress.addEventListener("click", => {
  //   myGitAddress.classList.toggle("")
  // })
  return cardDiv;
}