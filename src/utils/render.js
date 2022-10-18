const rootElement = document.getElementById("root");

const renderDOM = (...element) => {
	rootElement.append(...element);
}

export default renderDOM