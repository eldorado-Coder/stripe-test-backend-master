import expressJWT from 'express-jwt'

export const requireSignIn = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})