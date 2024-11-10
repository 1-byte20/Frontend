
    const users = [];

    function addUser() {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;

      if (name && age) {
        const user = { name, age };
        users.push(user);

        console.clear();
        console.log("Felhasználói adatok:", users);

        document.getElementById("name").value = '';
        document.getElementById("age").value = '';
      } else {
        alert("Kérlek, töltsd ki az összes mezőt!");
      }
    }
