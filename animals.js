const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
let num = prompt(`Enter a number betwwen 1 and  ${petsData.length}`);
num =parseInt(num) -1;
function showInfo() {
    let area = document.querySelector(".selectedPetInfo");
    area.innerHTML = `${petsData[num].petName}<br>
                        ${petsData[num].age}<br>
                        ${petsData[num].weightInKilos}<br>
                        ${petsData[num].breed}                
        `;
}   