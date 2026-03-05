let listElement = document.getElementsByTagName("li");

for(let i=0; i<listElement.length;i++){
    listElement[i].addEventListener("click", ()=>{
        switch(i){
            case 0:
                listElement[i].classList.add("li");
                listElement[i].setAttribute("class","active");
                listElement[i].textContent = "Kendini mutlu edecek şeyler yapman";
                break;
            case 1:
                 listElement[i].classList.add("li");
                 listElement[i].setAttribute("class","active");
                listElement[i].textContent = "Kendine daha çok altın alman(bunu zaten her yere yazıyoruz)";
                break;
            case 2:
                 listElement[i].classList.add("li");
                 listElement[i].setAttribute("class","active");
                listElement[i].textContent = "Kendine daha çok güzel kıyafetler alman";
                break;
case 3:
    listElement[i].classList.add("active");
    listElement[i].textContent = "Benimle gurur duyuyor olman";

    const img = document.createElement("img");
    img.src = "./pictures/mahcup köpek.jpg";
    img.classList.add("img");

    listElement[i].appendChild(img);
    break;
        }
    });
}
