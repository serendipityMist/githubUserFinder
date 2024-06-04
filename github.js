const user = document.querySelector("#userName");
// console.log(user);
const btn = document.querySelector("button");
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
  const uGet = user.value;
  console.log(uGet);

  fetch(`https://api.github.com/users/${uGet}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      avatar.classList.add("result");
      avatarShow.src = data.avatar_url;
      follower.textContent = `Followers: 
      ${data.followers}`;
      company.textContent = `Company: ${data.company}`;
      data.company
        ? (company.textContent = `Company: ${data.company}`)
        : (company.textContent = `Company: No Company`);
      following.textContent = `Following: ${data.following}`;
      userName.textContent = `Name: ${data.name}`;
      repo.textContent = `Public-Repos: ${data.public_repos}`;

      if (!data.bio) {
        // bio.textContent = "No bio has been added";
        bio.textContent = "Bio: No Bio ";
      } else {
        bio.textContent = `Bio: ${data.bio}`;
      }
      if (!data.location) {
        console.log("User has no location");
        getLocation.textContent = `Location: No Location`;
      } else {
        getLocation.textContent = `Location: ${data.location}`;
        console.log("working");
      }
      // avatar.innerHTML = data.avatar_url;
    })
    .catch((err) => {
      console.log(`failed to fetch data`);
      // if (!user.login) {
      //   avatar.innerHTML = `<p> User not found </p>  `;
      // }
    });
  user.value = "";
});
