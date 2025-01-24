import { initContract } from '@ts-rest/core';

import { companyCreateWithOwnerSchema, companyResponseWithUsersSchema, companyWithUserSchema } from '../company/index.js';
import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import { userResponseSchema } from '../user/schemas/responses/users-response.schema.js';
import loginSchema from './schemas/login.js';
import registerSchema from './schemas/register.js';
import { tokenSchema } from './schemas/token.js';
import { userInformationSchema } from './schemas/user-information.js';

const c = initContract();

const contract = c.router(
  {
    register: {
      method: 'POST',
      path: '/register',
      body: registerSchema,
      responses: {
        201: userResponseSchema,
      },
      summary: 'Register a new user & create user_authorization & user',
    },
    login: {
      method: 'POST',
      path: '/login',
      body: loginSchema,
      responses: {
        201: tokenSchema,
      },
      summary: 'Login and reponds the token',
    },
    verify: {
      method: 'POST',
      path: '/verify',
      body: tokenSchema,
      responses: {
        200: userInformationSchema,
      },
      summary: 'Verify JWT and responds with userId',
    },
    registerAsCompany: {
      method: 'POST',
      path: '/companies/register',
      body: companyCreateWithOwnerSchema,
      responses: {
        201: companyResponseWithUsersSchema,
      },
      summary: 'Create a company with the owner',
    },
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

export const authenticationContract = c.router({
  authentication: contract,
  health: healthContract,
});
