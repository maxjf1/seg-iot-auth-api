import { Router } from "express";
import { jwtSign, jwtVerify, setIp, withAuth } from './utils';
import { addDevice, addData, withValidUser } from './config/database';
import { SECRET, EXPIRATION } from './config/consts';

const IOTRouter = new Router

IOTRouter.get('/auth', setIp, async (req, res) => {
    console.log(req.IP)
    const device = addDevice({ ip: req.IP })
    const token = await jwtSign(device, SECRET, { expiresIn: EXPIRATION })
    res.send(token)
})

IOTRouter.get('/auth/:token', (req, res) => {
    console.log(req.params)
    jwtVerify(req.params.token, SECRET)
        .then(val => res.send(val))
        .catch(err => console.error(err) || res.status(401).send(err.message))
})


IOTRouter.post('/data/:data', withAuth, withValidUser, (req, res) => {
    addData(req.auth, req.params.data)
    res.sendStatus(200)
})

export default IOTRouter