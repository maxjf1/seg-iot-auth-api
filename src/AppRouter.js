import { Router } from "express";
import { setDeviceAuthorization, getDevices, getData, findDevice } from './config/database';

const AppRouter = new Router


AppRouter.get('/devices', (req, res) =>
    res.send(getDevices(req.body.filter))
)

AppRouter.get('/devices/new', (req, res) =>
    res.send(getDevices({ authorized: null }))
)

AppRouter.get('/devices/:id', (req, res) =>
    res.send(findDevice({ id: Number(req.params.id) }) || 404)
)

AppRouter.put('/devices/:id/authorize', (req, res) => {
    setDeviceAuthorization(Number(req.params.id), true)
    res.sendStatus(200)
})

AppRouter.delete('/devices/:id/authorize', (req, res) => {
    setDeviceAuthorization(Number(req.params.id), false)
    res.sendStatus(200)
})

AppRouter.get('/data', (req, res) => 
    res.send(getData(req.body.filter))
)

export default AppRouter