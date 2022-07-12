(function(){
    const listElements = document.querySelectorAll(".menu_item--show");
    const list = document.querySelector(".menu_links");
    const menu = document.querySelector(".menu_hamburguer");

    const addClip = ()=>{
     listElements.forEach(element =>{
        element.addEventListener("Click", ()=>{
           
            let subMenu =element.children[1];
            let height = 0;
            element.classList.toggle("menu_item--active");


            if(subMenu.clientHeight === 0){

                height= subMenu.scrollHeight;

            }

            subMenu.style.height =`${height}px`;

        })
        
     }) 
        

    }
    
    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if (element.children[1].getAtribute("Style")){
                element.children[1].removeAttribute("Style");
                element.classList.remove("menu_item--active");

            }
        })
    }
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
    
        }else{
            addClip();
        }

});

if(window.innerWidth <= 800){
    addClip();
}

menu.addEventListener("click", ()=> list.classList.toggle("menu_links--show"));

})();
