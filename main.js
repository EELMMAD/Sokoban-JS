/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

//grap elements
const board = document.querySelector(".board");
const buttonRestart = document.querySelector(".btn-restart");
const goalArray = [];

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal",
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
let playerX, playerY;
let moveY = 0;
let moveX = 0;
let moveBoxX = 0;
let xi;
let xj;

var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["B"],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["B"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            ["B"],
            [" "],
            ["B"],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
        ],
        [
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            ["W"],
            [" "],
            ["B"],
            [" "],
            [" "],
            ["B"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            ["P"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
    ],
};

const createMap = (map) => {
    map.mapGrid.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "board-row";
        item.forEach((elem, j) => {
            // console.log(elem[0]);
            switch (elem[0]) {
                case " ":
                    const span = document.createElement("span");
                    span.className = "board-cell";
                    span.textContent = " ";
                    div.appendChild(span);
                    break;
                case "W":
                    const spancell = document.createElement("span");
                    spancell.className = "board-cell";
                    const image = document.createElement("img");
                    image.setAttribute("src", "images/wall.png");
                    spancell.appendChild(image);
                    div.appendChild(spancell);

                    break;

                case "B":
                    const box = document.createElement("span");
                    box.className = "board-cell";
                    xj = j;
                    xi = i;
                    const imageBox = document.createElement("img");
                    imageBox.setAttribute("src", "images/box.png");
                    imageBox.setAttribute("id", `box${i}${j}`);
                    imageBox.className = "boxes";
                    box.appendChild(imageBox);
                    div.appendChild(box);
                    break;

                case "P":
                    playerX = j;
                    playerY = i;
                    const player = document.createElement("span");
                    player.className = "board-cell";
                    const imagePlayer = document.createElement("img");
                    imagePlayer.className = "player";
                    imagePlayer.setAttribute("src", "images/player.png");
                    player.appendChild(imagePlayer);
                    div.appendChild(player);
                    break;

                case "G":
                    const goal = document.createElement("span");
                    goal.className = "board-cell";
                    const imageGoal = document.createElement("img");
                    imageGoal.setAttribute("src", "images/gole.png");
                    goal.appendChild(imageGoal);
                    div.appendChild(goal);
                    goalArray.push(goal);
                    break;
            }
        });

        board.appendChild(div);
    });
};

const movePlayer = (e) => {
    console.log("winner is running");
    winner();
    switch (e.keyCode) {
        case 38:
            e.preventDefault();
            if (
                tileMap01.mapGrid[playerY - 1][playerX][0] === " " ||
                tileMap01.mapGrid[playerY - 1][playerX][0] === "G"
            ) {
                playerY -= 1;
                moveY = -51;
                const player = document.querySelector(".player");
                player.style.top = `${moveY}px`;
                setTimeout(() => {
                    const targetSpan = document.querySelector(".player").parentElement
                        .parentElement.previousElementSibling;
                    player.style.zIndex = 11;
                    targetSpan.children[playerX].appendChild(player);
                    player.style.top = 0;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY + 1][playerX][0] = " ";
                }, 100);

                return;
            }

            if (
                tileMap01.mapGrid[playerY - 1][playerX][0] === "B" &&
                tileMap01.mapGrid[playerY - 2][playerX][0] === " "
            ) {
                playerY -= 1;
                moveY = 51;
                const player = document.querySelector(".player");
                const spanPlayer = player.parentElement;
                const boxImage =
                    spanPlayer.parentElement.previousElementSibling.children[playerX];
                const prevSpanBox =
                    spanPlayer.parentElement.previousElementSibling.previousElementSibling
                        .children[playerX];

                boxImage.children[0].style.top = `${-moveY}px`;
                player.style.top = `${-moveY}px`;
                setTimeout(() => {
                    prevSpanBox.appendChild(boxImage.children[0]);
                    boxImage.appendChild(player);
                    prevSpanBox.children[0].style.top = 0;
                    boxImage.children[0].style.top = 0;
                    player.style.zIndex = 11;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY - 1][playerX][0] = "B";
                    tileMap01.mapGrid[playerY + 1][playerX][0] = " ";
                }, 100);
            }

            break;

        case 40:
            e.preventDefault();
            console.log(e.target);

            if (
                tileMap01.mapGrid[playerY + 1][playerX][0] === " " ||
                tileMap01.mapGrid[playerY + 1][playerX][0] === "G"
            ) {
                playerY += 1;
                moveY = 51;
                const player = document.querySelector(".player");
                player.style.top = `${moveY}px`;
                setTimeout(() => {
                    const targetSpan = document.querySelector(".player").parentElement
                        .parentElement.nextElementSibling;

                    targetSpan.children[playerX].appendChild(player);
                    player.style.top = 0;
                    player.style.zIndex = 11;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY - 1][playerX][0] = " ";
                }, 100);

                return;
            }

            if (
                (tileMap01.mapGrid[playerY + 1][playerX][0] === "B" &&
                    tileMap01.mapGrid[playerY + 2][playerX][0] === " ") ||
                (tileMap01.mapGrid[playerY + 1][playerX][0] === "B" &&
                    tileMap01.mapGrid[playerY + 2][playerX][0] === "G")
            ) {
                playerY += 1;
                moveY = 51;
                const player = document.querySelector(".player");
                const spanPlayer = player.parentElement;
                const boxspan =
                    spanPlayer.parentElement.nextElementSibling.children[playerX];
                const nextspanPlyer =
                    spanPlayer.parentElement.nextElementSibling.nextElementSibling
                        .children[playerX];

                const boxImage = boxspan.children[0];
                player.style.top = `${moveY}px`;
                boxImage.style.top = `${moveY}px`;
                player.style.zIndex = 11;

                setTimeout(() => {
                    boxspan.appendChild(player);
                    nextspanPlyer.appendChild(boxImage);

                    boxspan.children[0].style.top = 0;
                    nextspanPlyer.children[0].style.top = 0;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY + 1][playerX][0] = "B";
                    tileMap01.mapGrid[playerY - 1][playerX][0] = " ";
                }, 100);
            }

            break;
        case 37:
            e.preventDefault();
            if (
                tileMap01.mapGrid[playerY][playerX - 1][0] === " " ||
                tileMap01.mapGrid[playerY][playerX - 1][0] === "G"
            ) {
                playerX -= 1;
                moveY = -51;
                const player = document.querySelector(".player");
                player.style.left = `${moveY}px`;
                setTimeout(() => {
                    const targetSpan = document.querySelector(".player").parentElement
                        .previousElementSibling;

                    targetSpan.appendChild(player);
                    player.style.left = 0;
                    player.style.zIndex = 11;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY][playerX + 1][0] = " ";
                }, 100);

                return;
            }

            if (
                tileMap01.mapGrid[playerY][playerX - 1][0] === "B" &&
                tileMap01.mapGrid[playerY][playerX - 2][0] === " "
            ) {
                playerX -= 1;
                boxX = playerX - 1;

                moveBox = 51;
                const player = document.querySelector(".player");
                const playerSpan = document.querySelector(".player").parentElement;
                const boxSpan = playerSpan.previousElementSibling;
                const previosBoxSpan =
                    playerSpan.previousElementSibling.previousElementSibling;
                console.log(boxSpan.children[0]);
                boxSpan.children[0].style.left = `${-moveBox}px`;
                player.style.left = `${-moveBox}px`;

                setTimeout(() => {
                    previosBoxSpan.appendChild(boxSpan.children[0]);
                    boxSpan.appendChild(player);
                    previosBoxSpan.children[0].style.left = 0;
                    boxSpan.children[0].style.left = 0;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY][playerX - 1][0] = "B";
                    tileMap01.mapGrid[playerY][playerX + 1][0] = " ";
                }, 100);
            }
            break;
        case 39:
            e.preventDefault();
            if (
                tileMap01.mapGrid[playerY][playerX + 1][0] === " " ||
                tileMap01.mapGrid[playerY][playerX + 1][0] === "G"
            ) {
                playerX += 1;
                moveX = 51;

                const player = document.querySelector(".player");
                player.style.left = `${moveX}px`;
                player.style.zIndex = "10";
                setTimeout(() => {
                    const spanPlayer = document.querySelector(".player").parentElement;
                    const nextPlayer = spanPlayer.nextElementSibling;

                    nextPlayer.appendChild(player);
                    nextPlayer.children[0].style.left = "0";
                    player.style.left = 0;
                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY][playerX - 1][0] = " ";
                }, 100);
                return;
            }

            if (
                (tileMap01.mapGrid[playerY][playerX + 1][0] === "B" &&
                    tileMap01.mapGrid[playerY][playerX + 2][0] === " ") ||
                (tileMap01.mapGrid[playerY][playerX + 1][0] === "B" &&
                    tileMap01.mapGrid[playerY][playerX + 2][0] === "G")
            ) {
                playerX += 1;
                boxX = playerX - 1;

                moveBox = 51;
                const player = document.querySelector(".player");
                const playerSpan = player.parentElement;
                const boxSpan = playerSpan.nextElementSibling;
                const previosBoxSpan = playerSpan.nextElementSibling.nextElementSibling;

                if (boxSpan.children.length > 1) {
                    boxSpan.children[1].style.left = `${moveBox}px`;
                } else {
                    boxSpan.children[0].style.left = `${moveBox}px`;
                }
                player.style.left = `${moveBox}px`;

                setTimeout(() => {
                    if (boxSpan.children.length > 1) {
                        previosBoxSpan.appendChild(boxSpan.children[1]);

                        previosBoxSpan.children[1].style.left = 0;
                        previosBoxSpan.children[1].style.zIndex = "11";
                        console.log(previosBoxSpan.children[1]);
                    } else {
                        previosBoxSpan.appendChild(boxSpan.children[0]);
                        previosBoxSpan.children[0].style.left = 0;
                        if (previosBoxSpan.children.length > 1) {
                            previosBoxSpan.children[1].style.left = 0;
                            previosBoxSpan.children[1].style.zIndex = "11";
                        }
                    }

                    boxSpan.appendChild(player);

                    boxSpan.style.left = 0;
                    player.style.left = 0;

                    boxSpan.children[0].style.left = 0;

                    boxSpan.children[0].style.zIndex = "11";
                    player.style.zIndex = 12;

                    tileMap01.mapGrid[playerY][playerX][0] = "P";
                    tileMap01.mapGrid[playerY][playerX + 1][0] = "B";
                    tileMap01.mapGrid[playerY][playerX - 1][0] = " ";
                }, 100);
                return;
            }

            break;
    }
};

const winner = () => {
    const allCells = document.querySelectorAll(".board-cell");
    const allCellsArray = [...allCells];
    const result = allCellsArray.filter((item) => {
        if (item.children.length > 1) {
            console.log(item.children[1])
            return item.children[1].classList.contains('boxes');
        }
    });


    console.log(result);

    if (goalArray.length === result.length) {
        alert("You are Winner!");
        window.location.reload();
    }
};



createMap(tileMap01);

document.addEventListener('keydown', preventDefaultKeyDown);
document.addEventListener("keyup", movePlayer);

buttonRestart.addEventListener("click", () => {
    window.location.reload();
});


function preventDefaultKeyDown(e){
    switch(e.key){
        case 'ArrowUp':
            e.preventDefault();

            break;
        case 'ArrowDown':
            e.preventDefault();

            break;
    }
}
