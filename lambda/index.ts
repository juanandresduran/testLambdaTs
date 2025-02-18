// lambda/index.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TestServices } from '../services/testServices';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const result = TestServices.getHelloWorld()
    console.log("🚀 ~ handler ~ result:", result)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda with TypeScript!' }),
  };
};