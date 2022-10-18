import createElement from "../../utils/createElement"
import styles from "./Claim.module.scss"
import x from "../../assets/icon/x.svg"

const dialoClose = (nodeElement) => nodeElement.remove()


const Сlaim = () => { 
	
	container = createElement('div',
		[
			createElement('div',
				[
					createElement('button', [createElement('img', [], { attrs: { src: x } })], { cssClass: [styles.btnClose], events: { click: () => dialoClose(container) } }),
					
						createElement('div',
							[
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Спам"], { cssClass: ['text'], })
									],{ cssClass: ['label'], }),
								
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Изображения обнаженного тела или порнография"], { cssClass: ['text'], })
									],{ cssClass: ['label'], }),
								
								createElement('label',
								[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
									createElement('span', ["Членовредительство"], { cssClass: ['text'], })
									],{ cssClass: ['label'], }),
								
								createElement('label',
									[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
										createElement('span', ["Ложная информация"], { cssClass: ['text'], })
									],{ cssClass: ['label'], }),
								
								createElement('label',
										[	createElement('input', [], { cssClass: ['radio'], attrs: { type: "radio", name:"1" } }),
											createElement('span', ["Агрессивные действия"], { cssClass: ['text'], })
										],{ cssClass: ['label'], }),								
						],
							{ cssClass: [styles.wrapper_claims], }),
				createElement('button', ['Отправить'], { cssClass: [styles.claim_send], events: { click: () => dialoClose(container) } })

				],
				{ cssClass: [styles.wrapper] }),],
		{ cssClass: [styles.container] })
	
	return container
}

// createElement('label',
// 			[
// 			createElement('input', [], { cssClass: [], attrs: { type: "radio" } }),"Причина 2"
// 			], { cssClass: [] }),




export default Сlaim