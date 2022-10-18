function createElement(type, childs = [], options = {}) {
	const { cssClass = [], attrs = {}, events = {} } = options;
	
	const element = document.createElement(type);
	element.classList.add(...cssClass);
	Object.keys(attrs).forEach(key => {
		element.setAttribute(key, attrs[key])
	});
	Object.keys(events).forEach(eventName => {
		element.addEventListener(eventName, events[eventName])
	})
	element.append(...childs);
	
	
    return element;
}

export default createElement