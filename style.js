// heart icon functionalities
const hearts = document.getElementsByClassName("heart-icon");
const counter = document.getElementById("heart-count");

let sum = 0;
for(const heart of hearts){
    heart.addEventListener("click", function(){
        sum++;
        counter.innerText = sum;
    })
}

// copy button functionalities
const copies = document.getElementsByClassName("copy-icon");
const copyCounter = document.getElementById("copy");

let copyCount = 0;
for(const copy of copies){  
    copy.addEventListener("click", function(){
        
    const card = copy.closest(".card");
    const number = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCounter.innerText = copyCount;
    alert("Copied the number: " + number);
        
    })
}

// coin counts functionalities
let coins = 100;
let calls = document.getElementsByClassName("call");
for(let call of calls){
    call.addEventListener("click", function(){
        if (coins < 20){
            alert("Not enough coins!");
            return;
        }

        coins = coins - 20;
       document.getElementById("coins").innerText = coins;
       
        let service = call.parentElement.parentElement;
        let name = service.getElementsByClassName("service-name")[0].innerText;
        let number = service.getElementsByClassName("service-number")[0].innerText; 
         alert("Calling" + " " + name + " " + "at" + " " + number);
        
        let history = document.getElementById("call-history");
        let time = new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

        let div = document.createElement("div");
        div.classList.add("mt-2", "p-3", "bg-gray-100", "rounded-lg", "flex", "shadow", "justify-between", "items-center");
        history.appendChild(div);
        div.innerHTML = `
            <div>
            <h3 class="font-bold">${name}</h3>
            <p class="text-gray-700">${number}</p>
            </div>
            <p class="text-gray-400 text-sm">${time}</p>
        `
        
    })
}

// clear history functionalities
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("call-history").innerHTML = " ";
});



