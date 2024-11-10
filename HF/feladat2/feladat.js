
    const users = [];

    function addUser() {
      const lastName = document.getElementById("lastName").value;
      const firstName = document.getElementById("firstName").value;
      const favoriteNumber = document.getElementById("favoriteNumber").value;
      const hasLicense = document.getElementById("hasLicense").checked;

      if (lastName && firstName && favoriteNumber) {
        const user = {
          lastName: lastName,
          firstName: firstName,
          favoriteNumber: Number(favoriteNumber),
          hasLicense: hasLicense
        };
        users.push(user);

        console.clear();
        console.log("Összes felhasználó:", users);

        // Űrlap mezők törlése
        document.getElementById("lastName").value = '';
        document.getElementById("firstName").value = '';
        document.getElementById("favoriteNumber").value = '';
        document.getElementById("hasLicense").checked = false;
      } else {
        alert("Kérlek, töltsd ki az összes mezőt!");
      }
    }

    function showLicensedUsers() {
      const licensedUsers = users.filter(user => user.hasLicense);
      console.clear();
      console.log("Jogosítvánnyal rendelkezők:", licensedUsers);
    }

    function showUnlicensedUsers() {
      const unlicensedUsers = users.filter(user => !user.hasLicense);
      console.clear();
      console.log("Jogosítvánnyal nem rendelkezők:", unlicensedUsers);
    }
