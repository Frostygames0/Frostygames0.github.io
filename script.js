const sideNavbar = document.querySelector(".navbar-side")

function switchSideNavbar(toggle)
{
    sideNavbar.style.display = toggle ? "flex" : "none"
}

addEventListener("resize", () => switchSideNavbar(false))