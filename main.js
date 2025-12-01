// const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".calendar");

const calendarDays = 24;
const now = new Date();
const isDecember = now.getMonth() === 11;
const today = isDecember ? now.getDate() : 0;
const colors = ["c1", "c2", "c3", "c4"];
const gridOrder = [
        [6, 13, 10, 17],
        [2, 21, 4, 15],
        [24, 18, 9, 3],
        [12, 1, 20, 7],
        [19, 23, 14, 22],
        [8, 16, 5, 11]
      ];

for(let i = 0; i < calendarDays; i++) {
        const currentDate = i + 1;

        const doorWrapper = document.createElement("div");
        doorWrapper.classList.add("door");
        doorWrapper.style.gridArea = "door" + currentDate;

        let row, col;
        for (let r = 0; r < gridOrder.length; r++) {
                col = gridOrder[r].indexOf(currentDate);
                if (col !== -1) {
                        row = r;
                        break;
                }
        }

        const colorIndex = (row + col) % 4;
        doorWrapper.classList.add(colors[colorIndex]);

        const doorInner = document.createElement("div");
        doorInner.classList.add("door-inner");

        const doorFront = document.createElement("div");
        doorFront.classList.add("door-front");
        doorFront.textContent = currentDate;

        const doorBack = document.createElement("div");
        doorBack.classList.add("door-back");

        const calendarDoorLink = document.createElement('a');
        calendarDoorLink.href = './pages/day' + currentDate + ".html";
        calendarDoorLink.textContent = currentDate;
        doorBack.appendChild(calendarDoorLink);

        doorInner.appendChild(doorFront);
        doorInner.appendChild(doorBack);

        doorWrapper.appendChild(doorInner);
        calendarContainer.appendChild(doorWrapper);

        doorWrapper.addEventListener("mouseover",() => {
                if (currentDate <= today) {
                        doorWrapper.classList.toggle("flipped");    
                } else {
                        doorWrapper.classList.add("locked");

                        setTimeout(() => {
                                doorWrapper.classList.remove("locked");
                        }, 500);
                }
               
        });

      /*  const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");
        const calendarDoorLink = document.createElement('a');

        calendarDoor.classList.add("content")
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        calendarDoorLink.classList.add("link");
        calendarDoorLink.setAttribute("href", './pages/day' + currentDate + ".html");
        calendarDoorLink.innerHTML = currentDate + ".html";
        calendarDoor.appendChild(calendarDoorLink);
        */
}