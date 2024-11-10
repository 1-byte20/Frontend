document.getElementById("button").addEventListener("click", fetchUserData);
document.getElementById("pontok").addEventListener("click", () => displayOverallData());
document.getElementById("nyelvek").addEventListener("click", () => displayLanguagesData());


function fetchUserData() {
  const username = document.getElementById("nev").value;

  fetch(`https://www.codewars.com/api/v1/users/${username}`)
    .then(response => response.json())
    .then(data => {
      userData = data;
      displayOverallData();
    })
}