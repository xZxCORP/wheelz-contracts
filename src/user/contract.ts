import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { basicResponseSchema } from '../shared/basic-response.schema.ts.js';
import { healthContract } from '../shared/health/contract.js';
import {
  createPaginatedSchema,
  type InferPaginatedSchema,
  paginationParametersSchema,
} from '../shared/index.js';
import { userResponseSchema } from './schemas/responses/users-response.schema.js';
import { userSchema, userSchemaWithCompany } from './schemas/user.schema.js';
import { userCreateSchema } from './schemas/user-create.schema.js';
import { userUpdateSchema } from './schemas/user-update.schema.js';

const c = initContract();

const contract = c.router(
  {
    getPaginatedUsers: {
      method: 'GET',
      path: '/users',
      query: paginationParametersSchema.extend({ email: z.string().email().optional() }),
      responses: {
        200: createPaginatedSchema(userSchemaWithCompany),
      },

      summary: 'Get Paginated Users',
    },
    getRawUsers: {
      method: 'GET',
      path: '/raw-users',
      query: z.object({ email: z.string().email().optional() }),
      responses: {
        200: z.array(userSchema),
      },

      summary: 'Get Raw Users',
    },
    getUserById: {
      method: 'GET',
      path: `/users/:id`,
      responses: {
        200: z.object({
          data: userSchemaWithCompany,
        }),
      },
      summary: 'Get a user by id',
    },

    createUser: {
      method: 'POST',
      path: '/users',
      body: userCreateSchema,
      responses: {
        201: userResponseSchema,
      },
    },
    updateUser: {
      method: 'PATCH',
      path: '/users/:id',
      body: userUpdateSchema,
      responses: {
        200: basicResponseSchema,
      },
    },
    deleteUser: {
      method: 'DELETE',
      path: '/users/:id',
      responses: {
        200: basicResponseSchema,
      },
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

export const userContract = c.router({
  users: contract,
  health: healthContract,
});

export type PaginatedUsers = InferPaginatedSchema<typeof userSchemaWithCompany>;
