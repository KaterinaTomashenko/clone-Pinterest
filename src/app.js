import renderDOM from "./utils/render"

import api from "./api/api"

import Header from "./components/Header"
import BoxCarts from "./components/BoxCarts"
import Cart from "./components/Cart"

import "./styles/reset.scss"
import "./styles/main.scss"
import "./styles/media.scss"

renderDOM(
	Header()
)

api.get('posts').then(result => {
	renderDOM(
		BoxCarts(
			...result.map(post => {
				return Cart({
					avatar: post.avatar,
					img: post.img,
					description :post.description,
				})
			})
		)
	)
})



















// renderDOM(	Header(),
// 	BoxCarts(
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		}),
// 		Cart({
// 			avatar: avatar,
// 			img: img1,
// 		})
// 	)
// )