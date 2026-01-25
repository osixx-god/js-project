const heads = document.querySelectorAll(".accordion-head");
heads.forEach(head => {
    head.addEventListener("click", () =>{
        const body = head.nextElementSibling;
        const icon = head.querySelector("img");
        const isOpen = body.classList.contains("open");

        heads.forEach(h => {
        h.nextElementSibling.classList.remove("open");
        h.querySelector("img").src = "assets/images/icon-plus.svg";
        });

        if (!isOpen) {
            body.classList.add("open");
            icon.src = "assets/images/icon-minus.svg";
        }
    })
});

