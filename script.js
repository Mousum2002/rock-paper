let scores = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
        };
        
function getResult(userChoiceinput,mechineChoice)
{  let result;
    
        if (userChoiceinput === 'Rock'){
            mechineChoice ===1?(result = 'tie', scores.ties +=1) : mechineChoice === 2? (result='lost', scores.losses +=1) : (result = 'won',scores.wins+=1)
        }
        else if (userChoiceinput === 'Paper'){
            mechineChoice ===1?(result ='won',scores.wins+=1) : mechineChoice === 2? (result = 'tie', scores.ties +=1)  : (result = 'lost', scores.losses +=1)
        }
        else{
            mechineChoice ===1?(result = 'lost' , scores.losses +=1): mechineChoice === 2? (result = 'won',scores.wins+=1) : (result ='tie', scores.ties +=1)
        }
        return result;}

function playResult(userChoiceinput){
    let mechineChoice = Math.floor((Math.random()*3)+1);
    let result = getResult(userChoiceinput,mechineChoice);
    let mechineChoisetxt = mechineChoice ===1 ? 'Rock': mechineChoice === 2? 'Paper': 'Scissors';
    let resetbuttoninfo = document.querySelector('.reset-score-button');
    updateScore();
    showResult(result);
    showcompyou(userChoiceinput,mechineChoisetxt);
    resetbuttoninfo.innerHTML = 'Reset score';
    resetbuttoninfo.classList.remove('is-reseted');
    resetbuttoninfo.disabled = false;
    mechineChoice = Math.floor((Math.random()*3)+1);
}
function resetScore(){
        let resetbuttoninfo = document.querySelector('.reset-score-button');
        scores.wins = 0;
        scores.losses = 0;
        scores.ties = 0;
        resetbuttoninfo.innerHTML = 'Reseted score';
        resetbuttoninfo.classList.add('is-reseted');
        resetbuttoninfo.disabled = true;
    updateScore();
}
function showResult(result){
    document.querySelector('.js-result').innerHTML = result ==='tie' ? 'Tie':`You ${result}`;
}
function updateScore(){
document.querySelector('.js-score').innerHTML = `Wins:${scores.wins} Loses: ${scores.losses} Ties: ${scores.ties}`;
localStorage.setItem('score', JSON.stringify(scores));}

function showcompyou(u,m){

    document.querySelector('.compyou').innerHTML = `You <img src = "img/${u}Emoji.png" class= "result_icon"> Mechine <img src = "img/${m}Emoji.png" class= "result_icon">`;
}
let isAutoPlaying = false;
let intervalId;
function autoplay()
{
    let auto_play_button = document.querySelector('.auto_play_button');
    if (!isAutoPlaying)
    {
        intervalId = setInterval(() =>{
        let userChoiceinput = ['Rock','Paper','Scissors'][Math.floor(Math.random()*3)];
        playResult(userChoiceinput)},1000);
        isAutoPlaying = true;
        auto_play_button.innerHTML = 'Stop Auto Play';
        auto_play_button.classList.add('is-autoplaying');
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;  
        auto_play_button.innerHTML = 'Auto Play';
        auto_play_button.classList.remove('is-autoplaying'); 
    }
}


