import 'reflect-metadata';
import  { createConnection, Connection } from 'typeorm';
import { Ping } from './entities/Ping';

let connection:Connection = null;

export async function getConnection(){
    try{
        if(!connection || !connection.isConnected){
            console.log('attempt to create new connection');
    
            connection = await createConnection({
                type: 'mysql',
                host : '3.238.38.29',
                port : 43306,
                username: 'admin',
                password : 'Finaktiva2024*',
                database: 'dboccidenteDev',
                entities : [
                    Ping
                ], 
                synchronize: false,
                bigNumberStrings: true,
                supportBigNumbers: true
            });
        }else{
            console.log('connection succesfully recycled');
        }
        return connection;
    }catch(e){
        console.log("🚀 ~ getConnection ~ e:", e)
    }
};