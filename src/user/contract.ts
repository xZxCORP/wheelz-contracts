import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { basicResponseSchema } from '../shared.js';
import { userSchema } from './schemas/user.schema.js';
import { userCreateSchema } from './schemas/user-create.schema.js';
import { usersResponseSchema } from './schemas/user-response.schema.js';
import { userUpdateSchema } from './schemas/user-update.schema.js';
import { userResponseSchema } from './schemas/users-response.schema.js';

const c = initContract();

export const userContract = c.router(
  {
    getUsers: {
      method: 'GET',
      path: '/users',
      query: z.object({
        email: z.string().email().optional(),
      }),
      responses: {
        200: usersResponseSchema,
      },

      summary: 'Get users',
    },
    getUserById: {
      method: 'GET',
      path: `/users/:id`,
      responses: {
        200: z.object({
          data: userSchema,
        }),
      },
      summary: 'Get a user by id',
    },
    getUserByEmail: {
      method: 'GET',
      path: `/emai/:id`,
      responses: {
        200: z.object({
          data: userSchema,
        }),
      },
      summary: 'Get a user by email',
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
      400: basicResponseSchema,
      500: basicResponseSchema,
    },
  }
);
