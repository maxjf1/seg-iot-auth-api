
// DB
export const dbPath = 'database/database.json'
export const dbPathSensors = 'database/sensors.json'

// Server
export const serverPort = 3000
export const SECRET = process.env.SECRET || 'iot'
export const EXPIRATION = process.env.EXPIRATION || '30d'
export const PORT = process.env.PORT || 3000



/// MQTT
// export const mqttServer = 'mqtt://200.131.219.102'
export const mqttServer = 'mqtt://m2m.eclipse.org'
export const mqttHumidityTopic = 'iot7-humidity'
export const mqttTemperatureTopic = 'iot7-temperature'
export const mqttAmbientTopic = 'iot7-ambient'