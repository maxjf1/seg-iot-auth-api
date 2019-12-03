

import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('database/db.json')
const db = low(adapter)


db.defaults({ nextId: 0, devices: [], data: [] })
    .write()


export function withValidUser(req, res, next) {
    if (!req.auth || !findDevice({ id: req.auth.id }))
        return res.status(401).send('Invalid Auth')
    next()
}


export function addDevice({ ip = false }) {
    const id = db.get('nextId').value()
    const device = {
        id,
        name: `Device ${id}`,
        authorized: null,
        createdAt: (new Date()).getTime(),
        ip,
        address: null
    }
    db.get('devices').push(device).value()
    db.update('nextId', v => v + 1).value()

    db.write()

    return { id }
}

export function setDeviceAuthorization(id, authorized) {
    return db.get('devices')
        .find({ id })
        .assign({ authorized })
        .write()
}

export function getDevices(filter = null) {
    return db.get('devices').filter(filter).value()
}

export function getData(filter = null) {
    return db.get('data').filter(filter).value()
}

export function findDevice(query) {
    return db.get('devices').find(query).value()
}

export function deleteDevice(createdAt) {
    return db.get('devices').remove({ createdAt }).write()
}

export function findData(query) {
    return db.get('data').find(query).value()
}

export function deleteData(id) {
    return db.get('data').remove({ id }).write()
}

export function addData({ id }, value) {
    const device = db.get('devices').find({ id }).value()


    if (!device || !device.authorized) return

    console.log(device)

    const entry = {
        deviceId: device.id,
        createdAt: (new Date()).getTime(),
        value
    }
    db.get('data').push(entry).write()
}