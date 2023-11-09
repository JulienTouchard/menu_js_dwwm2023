/* creation d'une fonction pour initialiser mon menu */
const initMenu = () => {

    const ulPrincipal = document.createElement("ul");
    document.querySelector("#navMenu").append(ulPrincipal);
    menuEntries.forEach((element, index) => {

        const liPrincipal = document.createElement('li');
        liPrincipal.id = "liPrincipal" + index;
        // ajout de css avec liPrincipal.classList.add("maClass")
        liPrincipal.textContent = element.name;
        ulPrincipal.append(liPrincipal);
        // au click creation d'un sous menu
        liPrincipal.addEventListener("click", () => {
            //verification d'un sous menu existant avec son id
            if (document.body.contains(document.querySelector("#subUl" + index))) {

                document.querySelector("#subUl" + index).remove()
            } else {
                // detruire tous les elements submenu qui peuvent exister
                for (let i = 0; i < menuEntries.length; i++) {
                    if (document.body.contains(document.querySelector("#subUl" + i))) {
                        document.querySelector("#subUl" + i).remove();
                    }
                }
                // derniere etape : je peux maintenant créer l'element lier à l'event
                const subUl = document.createElement("ul");
                subUl.id = "subUl" + index;
                liPrincipal.append(subUl);
                menuEntries[index].subMenu.forEach((subelem, subindex) => {
                    const subLi = document.createElement("li");
                    subLi.innerText = subelem.subName;
                    subUl.append(subLi);
                })
            }
            //verification d'un sous menu existant avec son id
        })

    });
}

export { initMenu }