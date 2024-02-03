
    
    
// Globales Objekt, um den Zustand des zuletzt aktivierten Elements zu speichern
let lastClicked = null;

function makeExclusivePair(id1, id2, disabledClass) {
    const element1 = document.getElementById(id1);
    const element2 = document.getElementById(id2);
    let firstClick1 = true;
    let firstClick2 = true;

    if (element1 && element2) {
        element1.addEventListener('click', () => {
            if (firstClick1) {
                element2.classList.add(disabledClass);
            } else {
                element2.classList.remove(disabledClass);
            }
            firstClick1 = !firstClick1;
        });

        element2.addEventListener('click', () => {
            if (firstClick2) {
                element1.classList.add(disabledClass);
            } else {
                element1.classList.remove(disabledClass);
            }
            firstClick2 = !firstClick2;
        });
    }
}
    
makeExclusivePair('addOnPremiumTutor', 'addOnExperiencedTutor', 'disabled');
makeExclusivePair('addOnFemale', 'addOnMale', 'disabled');





