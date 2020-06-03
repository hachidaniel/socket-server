import Server from './classes/server';
import {SERVER_PORT} from './global/environment';
import {router} from './routes/router';
import bodyParse from 'body-parser';
import cors from 'cors';


const server  = new Server();
///boyd parse 

server.app.use(bodyParse.urlencoded({extended:true}));
server.app.use(bodyParse.json() );

///cors
server.app.use(cors({origin:true, credentials:true}))


server.app.use('/',router);


server.start(() => {

    console.log(`Servidor corriendo ${SERVER_PORT}`);

});