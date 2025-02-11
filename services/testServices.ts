import moment from "moment";

export class TestServices {
  static getHelloWorld(): string {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    return 'Hello from Lambda with TypeScript!ssss';
  }
}