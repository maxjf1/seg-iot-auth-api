import { resolve } from 'dns';
import jwt from 'jsonwebtoken'
import { SECRET } from './config/consts';

export const promisefy = fn =>
    (...args) => new Promise(
        (resolve, reject) => fn(...args,
            (err, data) => err ? reject(err) : resolve(data)
        )
    )

export const jwtSign = promisefy(jwt.sign)

export const jwtVerify = promisefy(jwt.verify)

export function setIp(req, res, next) {
    let addr = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(':').pop() || ''
    req.IP = addr.split('.').length === 4 && addr
    next()
}

export function withAuth(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'] || '';

    if (token && token.startsWith('Bearer ')) token = token.slice(7, token.length);

    if (!token) return res.status(401).send('No Auth')

    jwtVerify(token, SECRET)
        .then(decoded => {
            req.auth = decoded
            next()
        })
        .catch(err => res.status(401).send(err.message))
}