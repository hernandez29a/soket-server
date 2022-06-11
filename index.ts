import Server from "./classes/sever";
import router from './routes/router';
import express from 'express';
import cors from 'cors';

const server = new Server();


// BodyParer
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

// Rutas de Servicios
server.app.use('/', router);

// CORS
server.app.use( cors( {origin: true, credentials: true} ) );

server.start( () => {
    console.log(`Servidor corriendo en el puerto : ${server.port}`);
});
