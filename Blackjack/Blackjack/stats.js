window.onload = function() {
    displayStats();
}

function displayStats() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = ""; // Clear existing rows

    users.forEach(user => {
        let tr = document.createElement("tr");
        
        let usernameTd = document.createElement("td");
        usernameTd.innerText = user.username;
        tr.appendChild(usernameTd);

        let gamesPlayedTd = document.createElement("td");
        gamesPlayedTd.innerText = user.gamesPlayed;
        tr.appendChild(gamesPlayedTd);

        let winsTd = document.createElement("td");
        winsTd.innerText = user.wins;
        tr.appendChild(winsTd);

        let lossesTd = document.createElement("td");
        lossesTd.innerText = user.losses;
        tr.appendChild(lossesTd);

        let winRateTd = document.createElement("td");
        let winRate = user.gamesPlayed ? (user.wins / user.gamesPlayed * 100).toFixed(2) : 0;
        winRateTd.innerText = `${winRate}%`;
        tr.appendChild(winRateTd);

        tbody.appendChild(tr);
    });
}
