import moment = require("moment");
import { getConnection } from "../commons/connection";
import { Ping } from "../commons/entities/Ping";

export class Services1 {
  static async getHelloWorld(): Promise<string> {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const connection = await getConnection();
    const query = await connection?.query("SELECT NOW()");
    const data = await Ping.getPings();
    console.log("🚀 ~ Services1 ~ getHelloWorld ~ data:", data)
    console.log("🚀 ~ Services1 ~ getHelloWorld ~ query:", query)
    return 'Hello from Lambda with TypeScript!ssss';
  }
}