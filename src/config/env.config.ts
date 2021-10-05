export default {
    app: {
        port: process.env.PORT || 3535,
        baseUrl: process.env.BASE_URL || 'http://localhost:3535',
        lang: 'es'
    },
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/hellotargeting'
    },
}