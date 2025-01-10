import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { healthContract } from '../shared/health/contract.js';

const c = initContract();

const contract = c.router({
	getRoles: {
		method: 'GET',
		path: '/role/:id/',
		responses: {
			200: z.array(z.string()),
		},
		summary: "Get the roles of a user"
	}
});


export const roleContract = c.router({
	authentication: contract,
	health: healthContract,
});
