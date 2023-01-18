function toss(){
    // console.log("Clicked");

    // Randomly generating heads and tails

    var toss = ["Heads", "Tails"];

    var round = Math.round(Math.random() * 1)

    console.log(toss[round]);

    // displaying the random heads or tails on screen

    var show = document.getElementById("toss");

    show.innerHTML = "<h3>"+ toss[round] +"</h3>";

    // Displaying home many time heads or tails have been randomly generated in numbers

    var heads = document.getElementById("heads");
    
    var tails = document.getElementById("tails");

    if(toss[round] == "Heads"){
        heads.innerText ++;

    }
    else{
        tails.innerText ++;
    }
}