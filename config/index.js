import 'dotenv/config'

export const port = process.env.PORT || 5002
export const mongoDB_URI = process.env.mongoDB_URI

export default {
    port,
    mongoDB_URI
}
