document.addEventListener("DOMContentLoaded",()=>{
    let $ham_open = document.querySelector(".ham-open"),
    $nav_links = document.querySelector(".nav-links"),
    $btn_close = document.querySelector(".btn-close"),
    $img_interactive = document.getElementById("interactive-img");
 
    $ham_open.addEventListener("click",()=>{
        if($nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.remove("nav-links-open");
        }
        $nav_links.classList.add("nav-links-open");
    });
    $btn_close.addEventListener("click",()=>{
        $nav_links.classList.remove("nav-links-open");
    });

    if (window.matchMedia("(min-width: 1340px)").matches) {
        console.log($img_interactive);
        $img_interactive.src = "assets/img/desktop/image-interactive.jpg";
      } else {
        $img_interactive.src = "assets/img/mobile/image-interactive.jpg";
      }
});