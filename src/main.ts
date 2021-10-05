import express from 'express';
import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import { connectDb } from './config/database.config';
const AdminBroMongoose = require('@admin-bro/mongoose');

async function init() {
    const app = express();
    AdminBro.registerAdapter(AdminBroMongoose);
    const mongoConnection = await connectDb();
    const adminBro = new AdminBro({
        databases: [mongoConnection],
        rootPath: '/admin',
    });
    const router = AdminBroExpress.buildRouter(adminBro)
    app.use(adminBro.options.rootPath, router)
    app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

init();