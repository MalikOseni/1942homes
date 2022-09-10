const hamburger = document.querySelector(".head .navbar .nav_list .hamburger");
const mobile_menu = document.querySelector(".head .navbar .nav_list ul");
const menu_item = document.querySelectorAll(".head .navbar .nav_list ul li a");
const header = document.querySelector(".head.container");
// we have the click effect responsive view this in the inspection of website
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobile_menu.classList.toggle("active");
	// please ensure all const and selectors match or run into error reading
});
document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#485563";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
	item.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		mobile_menu.classList.toggle("active");
	});
});
