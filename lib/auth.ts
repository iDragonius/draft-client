import { JWTPayload, jwtVerify } from 'jose'
interface UserJwtPayload extends JWTPayload {
	id: string
}
export const getJwtSecretKey = () => {
	const secret = process.env.JWT_SECRET
	if (!secret || secret.length === 0) {
		throw new Error('The enviroment variable JWT_SECRET is not set')
	}

	return secret
}
export const verifyAuth = async (token: string) => {
	try {
		const verified = await jwtVerify(
			token,
			new TextEncoder().encode(getJwtSecretKey())
		)
		return verified.payload as UserJwtPayload
	} catch (e) {
		console.log(e)
	}
}
