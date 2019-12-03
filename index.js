import app, { start } from './src/config/express'
import cors from 'cors'
import IOTRouter from './src/IOTRouter'
import bodyParser from 'body-parser'
import AppRouter from './src/AppRouter'
app.use(cors())
app.use(bodyParser.json());


app.use('/iot', IOTRouter)
app.use('/app', AppRouter)

app.all('/', (req, res) => res.send('API ROOT'))
app.all(['/echo', '/echo/:route'], (req, res) => {
    res.send({
        params: req.params,
        body: req.body,
    })
})
app.all('*', (req, res) => res.send(404))

start(app)

export default app