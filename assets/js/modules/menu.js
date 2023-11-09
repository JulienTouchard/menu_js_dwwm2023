const initMenu = () => {
    const ulPrincipal = document.createElement("ul");
    document.querySelector("#navMenu").append(ulPrincipal);
    menuEntries.forEach((element, index) => {
        console.log(element.name);
        console.log(index);
        const liPrincipal = document.createElement('li');
        liPrincipal.id = "liPrincipal" + index;
        liPrincipal.textContent = element.name;
        ulPrincipal.append(liPrincipal);
        // au click creation d'un sous menu
        liPrincipal.addEventListener("click", () => {
            //verification d'un sous menu existant avec son id
            if (!document.body.contains(document.querySelector("#subUl" + index))) {
                const subUl = document.createElement("ul");
                subUl.id = "subUl" + index;
                liPrincipal.append(subUl);
                menuEntries[index].subMenu.forEach((subelem, subindex) => {
                    const subLi = document.createElement("li");
                    subLi.innerText = subelem.subName;
                    subUl.append(subLi);
                })
            } else {
                
            }

            //verification d'un sous menu existant avec son id
        })

    });
}

export { initMenu }