let character = document.getElementById("character");
let game = document.getElementById("game");
let keyPressed = false;
let interval;
let counter = 0;
let currentBlocks = [];

function moveLeft () {
    let left = parseInt(
        window.getComputedStyle(document.getElementById("character")).getPropertyValue("left")
    );
    if (left > 0) {
        character.style.left = left - 2 + "px";
    }
}

function moveRight () {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    if (left < 380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (!keyPressed) {
        keyPressed = true;

        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    keyPressed = false;
});

const setInt = setInterval(() => {
    /*  if (counter > 5) {
        clearInterval(setInt);
    } */
    let blockLast = document.getElementById("block" + (counter - 1));
    let holeLast = document.getElementById("hole" + (counter - 1));
    if (counter > 0) {
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if (counter == 0 || blockLastTop < 400) {
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block" + counter);

        let hole = document.createElement("div");
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole" + counter);

        game.appendChild(block);
        game.appendChild(hole);

        let randomPos = Math.floor(Math.random() * 360);
        hole.style.left = randomPos + "px";

        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";

        currentBlocks.push(counter);
        counter++;
    }

    let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let charLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    let drop = 0;
    if (charTop <= 0) {
        alert("Game over!");
        clearInterval(setInt);
        location.reload();
    }
    // console.log(`Block Length= ${currentBlocks.length}, ${currentBlocks}`);
    for (let i = 0; i < currentBlocks.length; i++) {
        let current = currentBlocks[i];
        let iblock = document.getElementById("block" + current);
        let ihole = document.getElementById("hole" + current);
        let iblockTop = parseInt(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseInt(window.getComputedStyle(ihole).getPropertyValue("left"));
        console.log(
            `Block top = ${iblockTop}, iholeLeft=${iholeLeft}, charTop=${charTop}, charLeft=${charLeft}`
        );
        iblock.style.top = iblockTop - 1 + "px";
        ihole.style.top = iblockTop - 1 + "px";

        if (iblockTop < -20) {
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }

        if (iblockTop - 20 < charTop && iblockTop > charTop) {
            drop++;
            if (iholeLeft <= charLeft && iholeLeft + 20 >= charLeft) {
                drop = 0;
            }
        }
    }
    if (drop == 0) {
        if (charTop < 480) {
            character.style.top = charTop + 2 + "px";
        }
    } else {
        character.style.top = charTop - 0.5 + "px";
    }
}, 10);

//clearInterval(setInt);
