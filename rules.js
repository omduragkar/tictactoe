const cellElements = document.querySelectorAll(".block");

let circleTurn = true;
const XCLASS = 'x'
const OCLASS = 'o'
cellElements.forEach(cell=>{
    cell.addEventListener('click', handleClick, true);
})

const wincombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
swapturn();
function handleClick(e){
    console.log({clicked:true});
    const cell = e.target;
    const currclass = circleTurn?OCLASS:XCLASS;
    placemark(cell, currclass);
    if(checkWin(currclass)){
        console.log("winner", currclass)
        if(confirm(`winner ${currclass} Do you want to replay the game`))
        {
            window.location.reload();
        }
        
    }
    swapturn();
}

function placemark(cell, currclass){
    cell.classList.add(currclass);
}

function swapturn(){
    circleTurn = !circleTurn;
    document.querySelector(".player").textContent =  `2 Player Turn ${circleTurn?" O ": " X "}`
}

function checkWin(currclass){
    return wincombinations.some(condn=>{
        return condn.every(index=>{
            const x =  (cellElements[index].classList.contains(currclass))
            console.log(x, index);
            return x;
        })
    })
}