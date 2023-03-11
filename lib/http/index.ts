import axios from 'axios'
import { getCookie, getCookies, setCookie } from 'cookies-next'
const $api = axios.create({
	baseURL: 'http://localhost:1337/',
	withCredentials: true,
})
$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${getCookie('token')}`
	setCookie('key', 'value')

	return config
})

// $api.interceptors.response.use(
// 	config => {
// 		return config
// 	},
// 	async error => {
// 		const originalRequest = error.config
// 		if (
// 			error.response.status === 500 &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true
// 			try {
// 				const response = await axios.get(
// 					`${process.env.API_URL}/auth/refresh`,
// 					{
// 						withCredentials: true,
// 					}
// 				)
// 				localStorage.setItem('token', response.data.accessToken)
// 				return $api.request(originalRequest)
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}
// 		throw error
// 	}
// )
export default $api
