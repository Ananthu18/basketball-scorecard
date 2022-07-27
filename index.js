let hscoreel = document.getElementById("score1")
let gscoreel = document.getElementById("score2")

let hb1 = document.getElementById("hb1")
let hb2 = document.getElementById("hb2")
let hb3 = document.getElementById("hb3")
let gb1 = document.getElementById("gb1")
let gb2 = document.getElementById("gb2")
let gb3 = document.getElementById("gb3")

let ng = document.getElementById("newgame")

let homescore = 0
let guestscore=0


function addh1()
{   
        homescore += 1
        hscoreel.textContent = homescore
        //console.log(homescore) 
}
function addh2()
{   
        homescore += 2
        hscoreel.textContent = homescore
        //console.log(homescore) 
}
function addh3()
{   
        homescore += 3
        hscoreel.textContent = homescore
        //console.log(homescore) 
}
function addg1()
{   
        guestscore += 1
        gscoreel.textContent = guestscore
        //console.log(homescore) 
}
function addg2()
{   
        guestscore += 2
        gscoreel.textContent = guestscore
        //console.log(homescore) 
}
function addg3()
{   
        guestscore += 3
        gscoreel.textContent = guestscore
        //console.log(homescore) 
}

function newgame(){
    homescore=0
    guestscore=0
    hscoreel.textContent = homescore
    gscoreel.textContent = guestscore
}

