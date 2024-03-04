
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const score= document.querySelector("#rest");


const genCompChoice = ()=>{
    const options=["snake","water","gun"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game draw !";
    msg.style.backgroundColor = "#081b31";
}
const userwin=(userChoice,compChoice)=>{
    // console.log("You win!");
    userScore++;//beacuse it was equal to zero initially
    userScorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}
const compwin=(userChoice,compChoice)=>{
    // console.log("You loos! , try again");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
}


const playGame=((userChoice)=>{
    console.log("user choice =",userChoice)
    //Genrate computer choice -> use modular way of programming in whichc fumction can be used further for more
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice)
    if(userChoice===compChoice){
        drawGame();
    }
    else if(userChoice=="snake" && compChoice=="water"){
        userwin(userChoice,compChoice);
    }
    else if(userChoice=="snake" && compChoice=="gun"){
        compwin(userChoice,compChoice);
    }
    else if(userChoice=="water" && compChoice=="gun"){
        userwin(userChoice,compChoice);
    }
    else if(userChoice=="water" && compChoice=="snake"){
        compwin(userChoice,compChoice);
    }
    else if(userChoice=="gun" && compChoice=="snake"){
        userwin(userChoice,compChoice);
    }
    else if(userChoice=="gun" && compChoice=="water"){
        compwin(userChoice,compChoice);
    };
});
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() =>{//userchoice described the id for particular div
        const userChoice = choice.getAttribute("id");//for get the user choice
        // console.log(userChoice);
        // console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});
rest.addEventListener("click",()=>{
    window.location.reload();
})


