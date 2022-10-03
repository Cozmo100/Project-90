function ToGame(){
    f1 = document.getElementById('player1_name').value;
    f2 = document.getElementById('player2_name').value;

    localStorage.setItem("FACTOR1",f1);
    localStorage.setItem("FACTOR2",f2);

    window.location = "game_login.html";
}

