// JavaScript code

let view = 0;
let key = '';
let display_table = '<p>';

view = 0;  //testing
mainInst = document.getElementById('mainInst');
nxtBtn = document.getElementById('nxtBtn');
nxtInst = document.getElementById('nxtInst');
homeBtn = document.getElementById('homeBtn');

window.onload = function() {
    //todo: build randomized symbol list
    
    startHere();

}

function startHere() {
    console.log('startHere');
    mainInst.innerHTML = '<p>I can read your mind</p>';
    mainInst.classList.remove("display-1");
    nxtBtn.style.display = "none";
    nxtInst.style.display = "none"; 
    homeBtn.textContent = 'Go';
    homeBtn.setAttribute('id', 'id_1');
    console.log("startHere");
    view = 1;
}

function homeBtnFun() {
console.log('homeBtnFun view='+view);
    if (view !== 1) {
        view = 0;
        startHere();
        homeBtn.textContent = 'Go';
        console.log('B');
    } else {
        buildCard();
        homeBtn.textContent = 'Restart';
        console.log('A');
    }
}

function buildCard() {
console.log('buildCard view='+view);

    switch (view) {
        case 0:
            mainInst.textContent = 'I can read your mind';
            nxtBtn.style.display = "none";
            nxtInst.style.display = "none"; 
            homeBtn.textContent = 'Go';
            break;
        case 1:
            mainInst.innerHTML = '<p>Pick a number from 01 - 99</p>';
            nxtBtn.style.display = "block";
            nxtBtn.textContent = 'NEXT';
            nxtInst.style.display = "block";
            nxtInst.innerHTML = '<p>when you have your number click next</p>';
            homeBtn.textContent = 'Restart';
            console.log('case-1 v='+view);
            view = 2;
            break;
        case 2:
            mainInst.innerHTML = '<p>Add both digits together to get a new number</p>';
            nxtInst.style.display = "block";
            nxtInst.innerHTML = '<p>Ex: 14 is 1 + 4 = 5<br><br>click next to proceed</p>';
            nxtBtn.style.display = "block";
            nxtBtn.innerHTML = 'NEXT';
            homeBtn.textContent = 'Restart';
            console.log('case-2 v='+view);
            view = 3;
            break;         
        case 3:
            mainInst.innerHTML = '<p>Subtract your new number from the original number</p>';
            nxtInst.style.display = "block";
            nxtInst.innerHTML = '<p>Ex: 14 - 5 = 9<br><br>click next to proceed</p>';
            nxtBtn.style.display = "block";
            homeBtn.textContent = 'Restart';
            console.log('case-3 v='+view);
            view = 4;
            break;
        case 4:
            dispSymbols();
            mainInst.innerHTML = '<p>' + display_table + '</p>';
            nxtInst.style.display = "block";
            nxtInst.innerHTML = '<p>Find your new number.<br><br>Note the symbol beside the number</p>';
            nxtBtn.style.display = "block";
            nxtBtn.textContent = 'REVEAL';
            homeBtn.textContent = 'Restart';
            view = 5;
            break;
        case 5:
            mainInst.textContent = key;
            mainInst.setAttribute('class', 'display-1');
            nxtInst.style.display = "block";
            nxtInst.innerHTML = '<p>Your symbol is:<br><br>' + key +'</p>';
            nxtBtn.style.display = "none";
            homeBtn.textContent = 'Restart';
            view = 0
            break;
    }
}

function dispSymbols() {

    display_table = '<p>';
    let random_ascii;
    let ascii_low = 9728;    //start of symbol
    let ascii_high = 9884;
    let keyPos = Math.floor(Math.random()*156 +9724);
    key = String.fromCharCode(keyPos);
    console.log('keyPos='+keyPos+ ' key='+key);
    for(let i = 0; i <= 99; i++) {
        random_ascii = Math.floor((Math.random() * (101)) + ascii_low);
        randomSymbol = String.fromCharCode(random_ascii);

            //console.log('symbol=' + random_ascii );
            //console.log('symbol=' + String.fromCharCode(random_ascii) );
        if (i%9 !== 0 || i === 0) {
            display_table += i + ' - ' + randomSymbol + '<br>';
        } else {
            display_table += i + ' - ' + key + '<br>';
        }
    }
    display_table += '</p>';
    console.log('string='+ random_ascii);
//}
}