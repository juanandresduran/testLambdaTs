// lambda/index.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Services1 } from '../services/services1';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const result = await Services1.getHelloWorld()
    console.log("🚀 ~ handler ~ result:", result)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda with TypeScript!' }),
  };
};