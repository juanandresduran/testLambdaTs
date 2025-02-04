import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejsLambda from 'aws-cdk-lib/aws-lambda-nodejs';
export class TestLambdaTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /// Define la función Lambda
    const myLambda = new nodejsLambda.NodejsFunction(this, 'MyLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: 'lambda/index.ts', // Ruta al código de la Lambda
      handler: 'handler', // Nombre del método exportado
    });
  }
}
