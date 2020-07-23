import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_55EJ6OWgU',
  ClientId:'4qq33suoqllprqsccjl616hch7'
}

export default new CognitoUserPool(poolData);