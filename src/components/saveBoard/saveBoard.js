import createElement from "../../utils/createElement"
import styles from "./saveBoard.module.scss"
import x from "../../assets/icon/x.svg"

const dialoClose = (nodeElement) => nodeElement.remove()


const saveBoard = () => { 
	
	container = createElement('div',
		[
			createElement('div',
				[
					createElement('button', [createElement('img', [], { attrs: { src: x } })], { cssClass: [styles.btnClose], events: { click: () => dialoClose(container) } }),
					
						createElement('div',
							[
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Доска 1"], { cssClass: ['text'], })
									], { cssClass: ['label'] }),
								
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Доска 2"], { cssClass: ['text'], })
									], { cssClass: ['label'] }),
								
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Доска 3"], { cssClass: ['text'], })
									], { cssClass: ['label'] }),
																
						],
							{ cssClass: [styles.wrapper_claims], }),
				createElement('button', ['Отправить'], { cssClass: [styles.claim_send], events: { click: () => dialoClose(container) } })

				],
				{ cssClass: [styles.wrapper] }),],
		{ cssClass: [styles.container] })
	
	return container
}

export default saveBoard