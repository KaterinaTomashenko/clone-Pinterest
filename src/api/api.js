const URL_API = 'https://6342b754ba4478d47840ca34.mockapi.io/'


const headers = {
	'Content-Type': 'application/json;charset=utf-8'
}

// 1. import
// let posts = []
// 2. api.get('posts').then(results => posts = results)

class Api {
	async get(endpoint) {
		const res = await fetch(URL_API + endpoint)
		return await res.json()
	}

	async post(endpoint, body, options) {
		const res = await fetch(URL_API + endpoint, {
			method: 'POST',
			headers,
			body: JSON.stringify(),
			...options
		})

		const data = await res.json()

		return {
			status: res.status,
			data,
		}
	}

	async put(endpoint, body, options) {
		const res = await fetch(URL_API + endpoint, {
			method: 'PUT',
			headers,
			body: JSON.stringify(body),
			...options
		})

		const data = await res.json()

		return {
			status: res.status,
			data,
		}
	}

	async delete(endpoint) {
		const res = await fetch(URL_API + endpoint, {
			method: 'DELETE',
		})

		const data = await res.json()

		return {
			status: res.status,
			data,
		}
	}
}

export default new Api()