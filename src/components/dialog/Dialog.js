import createElement from "../../utils/createElement"
import styles from "./Dialog.module.scss"
import x from "../../assets/icon/x.svg"
import renderDOM from "../../utils/render";

import Сlaim from "../claim/Claim"
import saveBoard from "../saveBoard/saveBoard"

import Store from "../../store/Store"

// const store = new Store([])

// store.state = {
// 	role: 'admin'
// }

// store.state = {
// 	role: 'user'
// }

// //store.clear()

// console.log(store.state)


let container = null

const dialoClose = (nodeElement) => nodeElement.remove()

	const claimClick = () => {
								renderDOM(	Сlaim()
								)}

	const saveClick = () => {
								renderDOM(	saveBoard()
	)
}

const Dialog = (...node) => {
	
	if (container) dialoClose(container)

	container = createElement('div',
	[
			createElement('div',
				[
					createElement('button',
						[
							createElement('img', [], { attrs: { src: x } })],
						{ cssClass: [styles.btnClose], events: { click: () => dialoClose(container) } }),
				
					
						createElement('div',
							[
								createElement('button',
								[document.createTextNode('Добавить на доску')],
									{ cssClass: [styles.wrapper_btnTransition], events: {  click: saveClick} }),
								
								createElement(	'button',
								[document.createTextNode('Пожаловаться')],
								{ cssClass: [styles.wrapper_btnTransition], events: { click: claimClick	 } })
						],
							{ cssClass: [styles.wrapper_btn], })
					
				],
				{ cssClass: [styles.wrapper] }),],
		{ cssClass: [styles.container],	events: { click: () => dialoClose(container) } })
	
	return container
}

export default Dialog