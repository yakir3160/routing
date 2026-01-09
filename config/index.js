import 'dotenv/config'

export const port = process.env.PORT || 5002
export const mongoDB_URI = process.env.mongoDB_URI
export const jwtSecret = process.env.JWT_SECRET
export const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY

export default {
    port,
    mongoDB_URI,
    jwtSecret,
    openWeatherApiKey
}
