//accordeon

var acc = document.getElementsByClassName("accordeon-animated-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            let active = document.querySelectorAll(".accordeon-animated-1 .accordeon-animated-button.active");
            for(let j = 0; j < active.length; j++){
                active[j].classList.remove("active");
                active[j].nextElementSibling.style.maxHeight = null;
            }
            this.classList.toggle("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

