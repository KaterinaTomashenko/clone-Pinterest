import createElement from "../utils/createElement"

const BoxCarts = (...children) => {
	// console.log(children)
	return createElement("section", children, { cssClass: ['body'] });
}

export default BoxCarts