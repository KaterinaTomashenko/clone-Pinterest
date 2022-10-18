import createElement from "../utils/createElement"
import renderDOM from "../utils/render";
import Dialog from "./dialog/Dialog"

const Cart = ({ avatar, img, description }) => {
/* только хапись аватара и дискрипшн */
	const body_Tag = createElement("p", [document.createTextNode(description)], { attrs: { 'data-description': description, title: description }, cssClass: ["tag"], });
	const body_Avatar = createElement("img", [], { cssClass: ["avatar"], attrs: { src: avatar, alt: "avatar" }, });
	const body_ContainerDescription = createElement("div", [body_Avatar, body_Tag], { cssClass: ["body-container_description"], });

	const handleClick = () => {
		renderDOM(
			Dialog()
		)
	}

	const body_Picture = createElement("img", [], {	cssClass: ["picture"], attrs: { src: img, alt: "picture" },
		events: {
			click: handleClick
		}
	});
	const body_ContainerPicture = createElement("div", [body_Picture], {cssClass: ["body-container_picture"],});

	return createElement("div", [body_ContainerPicture, body_ContainerDescription], { cssClass: ["body-container"], });
}

export default Cart














// 	events: {
	// 		click: () => {
	// 				const dropDownСontent = () => { 
	// 				const dropDownClick = createElement("a", [document.createTextNode('Добавить на доску')], { cssClass: ['dropdown-content_links'], });
	// 					const dropDownComplain = createElement("a", [document.createTextNode('Пожаловаться')], {
	// 						cssClass: ['dropdown-content_links'],
	// 						events: {
	// 							click: () => {
														
	// 								const claimOne = createElement("p", [document.createTextNode('Причина 1')], { cssClass: [], });
	// 								const claimTwo = createElement("p", [document.createTextNode('Причина 2')], { cssClass: [], });
	// 								const modalContent = createElement("div", [claimOne,claimTwo], { cssClass: ['modal-content'], });
	// 								const modals = createElement("div", [modalContent], { cssClass: ['modal'], });
									
	// 								modals.forEach(elem => {
	// 								  elem.addEventListener("click", event => {
	// 									if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
	// 								  });
	// 								});
									
	// 								function toggleModal(modalId) {
	// 									const modal = document.getElementById(modalId);
									
	// 									if (getComputedStyle(modal).display === "flex") {
	// 										modal.classList.add("modal-hide");
	// 										setTimeout(() => {
	// 											document.body.style.overflow = "initial";
	// 											modal.classList.remove("modal-show", "modal-hide");
	// 											modal.style.display = "none";
	// 										}, 200);
	// 									}
	// 									else {
	// 										document.body.style.overflow = "hidden";
	// 										modal.style.display = "flex";
	// 										modal.classList.add("modal-show");
	// 									}
	// 								}
	// 								}
	// 							 }
	// 					});
					
	// 				return createElement("div", [dropDownClick,dropDownComplain], { cssClass: ["dropdown-content"], });
	// 			}
	// 			dropDownСontent().classList.toggle("show")
	// 	}
	// }
