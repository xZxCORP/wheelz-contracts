import { initContract } from '@ts-rest/core';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import {
  companiesResponseWithUsersSchema,
  companyCreateWithOwnerIdSchema,
  companyResponseWithUsersSchema,
  companyUpdateSchema,
} from './schemas/index.js';

const c = initContract();

const contract = c.router(
  {
    index: {
      method: 'GET',
      path: '/companies',
      responses: {
        200: companiesResponseWithUsersSchema,
      },
      summary: 'Get all companies',
    },
    show: {
      method: 'GET',
      path: '/companies/:id',
      responses: {
        200: companyResponseWithUsersSchema,
      },
      summary: 'Get one company',
    },
    update: {
      method: 'PUT',
      path: '/companies/:id',
      body: companyUpdateSchema,
      responses: {
        200: companyResponseWithUsersSchema,
      },
      summary: 'Update one company',
    },
    create: {
      method: 'POST',
      path: '/companies',
      body: companyCreateWithOwnerIdSchema,
      responses: {
        201: companyResponseWithUsersSchema,
      },
      summary: 'Create a new company',
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

export const companyContract = c.router({
  contract: contract,
  health: healthContract,
});
