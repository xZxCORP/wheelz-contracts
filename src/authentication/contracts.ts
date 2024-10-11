import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { healthContract } from '../shared/health/contract.js';
import registerSchema from './schemas/register.js';
import { userResponseSchema } from '../user/schemas/users-response.schema.js';
import loginSchema from './schemas/login.js';
import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';

const c = initContract();

const authenticationContract = c.router(
  {
    register: {
      method: 'POST',
      path: '/register',
      body: registerSchema,
      responses: {
        201: userResponseSchema
      },
      summary: 'Register a new user & create user_authorization & user'
    },
    login: {
      method: 'POST',
      path: 'login',
      body: loginSchema,
      responses: {
        201: z.string()
      },
      summary: 'Login and reponds the token'
    },
    verify: {
      method: 'POST',
      path: 'verify',
      body: z.string(),
      responses: {
        201: z.number()
      },
      summary: 'Verify JWT and responds with userId'
    }
  },
  {
    commonResponses: {
      404: basicResponseSchema,
      422: basicResponseSchema,
      400: basicResponseSchema,
      500: basicResponseSchema,
    },
  }
);

  export const AuthenticationWithHealthContract = c.router({
    authentication: authenticationContract,
    health: healthContract,
  });
