import createElement from "../utils/createElement"

import iconPinterest from "../assets/icon/icon-pinterest.png"
import iconMagnifier from "../assets/icon/icon-magnifier.png"
import iconDownArrow from "../assets/icon/down-arrow.png"


const inputSearch = event => {
	const value = event.target.value.trim();	
	const cartsElements = document.querySelectorAll('[data-description')

	cartsElements.forEach(element => {
		const descriptionStr = element.dataset.description
		const checkWith = descriptionStr.startsWith(value)
		const targetElement = element.parentElement.parentElement
			
		checkWith
			? targetElement.classList.remove('hide')
			: targetElement.classList.add('hide')
	});
}

const Header = () => {
	const header_Logo = createElement("img", [], { cssClass: ["logo"], attrs: { src: iconPinterest, alt: "logo" }, });
	const header_ButtonLogo = createElement("button", [header_Logo], { cssClass: ["header-button_logo"], });

	const header_SearchIcon = createElement("img", [], { cssClass: ["header-search_icon"], attrs: { src: iconMagnifier }, alt: "search" });
	const header_Search = createElement("input", [], { cssClass: ["header-search"], attrs: { type: "text", placeholder: "Поиск" } });
	const header_SearchContainer = createElement("div", [header_Search, header_SearchIcon], {cssClass: ["header-search_container"],attrs: { id: "input"},
	
		events: {
			input: inputSearch
			}
	});

	const header_ListIcon = createElement("img", [], { cssClass: ["header-button_list-icon"], attrs: { src: iconDownArrow, alt:"parameters"},});
	const header_ButtonList = createElement("button", [header_ListIcon], { cssClass: ["header-button_list"], });
	
	return createElement("header", [header_ButtonLogo, header_SearchContainer,header_ButtonList], { cssClass: ["header"] });
}




export default Header