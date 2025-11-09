 function toggleMenu() {
      const menu = document.getElementById("dropdownMenu");
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
function openFile() {
      
      window.open.href="login.html"; }
 function playAudio() {
      var audio = document.getElementById("myAudio");
      audio.play();
    }     
    function saveData() {
      // get values
      let Contact1= document.getElementById("f3").value;
      let Contact2= document.getElementById("f4").value;

      // create an object
      let user = { Contact1:Contact1, Contact2:Contact2 };

      // get old data or empty array
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // add new user
      users.push(user);

      // save back
      localStorage.setItem("users", JSON.stringify(users));

      // redirect to contact.html
      window.location.href = "contact.html";
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let table = document.getElementById("userTable");

    // loop and add rows
    users.forEach(u => {
      let row = table.insertRow();
      row.insertCell(0).innerText = u.name;
      row.insertCell(1).innerText = u.email;
    });