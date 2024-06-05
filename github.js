const user = document.querySelector("#userName");
const btn = document.querySelector("#searchButton");
const avatar = document.querySelector(".avatar");
const avatarShow = document.querySelector("#avatarShow");
const follower = document.querySelector("#followers");
const following = document.querySelector("#following");

const bio = document.querySelector("#bio");
const userName = document.querySelector("#name");

const getLocation = document.querySelector("#location");
const company = document.querySelector("#company");
const repo = document.querySelector("#publicRepo");

btn.addEventListener("click", () => {
  console.log(`The button is clicked`);
  const uGet = user.value;
  console.log(uGet);

  fetch(`https://api.github.com/users/${uGet}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      avatar.classList.add("result");
      return response.json();
    })
    .then((data) => {
      avatarShow.src = data.avatar_url;
      follower.textContent = `Followers: ${data.followers}`;
      company.textContent = data.company
        ? `Company: ${data.company}`
        : `Company: No Company`;
      following.textContent = `Following: ${data.following}`;
      userName.textContent = `Name: ${data.name}`;
      repo.textContent = `Public-Repos: ${data.public_repos}`;
      bio.textContent = data.bio ? `Bio: ${data.bio}` : "Bio: No Bio";
      getLocation.textContent = data.location
        ? `Location: ${data.location}`
        : `Location: No Location`;
    })
    .catch((err) => {
      console.error(err);
      alert("User data could not be fetched.");
    });
  user.value = "";
});
