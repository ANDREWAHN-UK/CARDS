// this takes all the panels and places them in a variable
const panels = document.querySelectorAll(".panel");

// this is basically a for loop that goes through each panel, removes the active class and adds it to the panel clicked on
panels.forEach(
    (panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add("active");
        })
    }
)

// this function removes the active class from a panel
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}