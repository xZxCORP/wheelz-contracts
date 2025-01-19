import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { healthContract } from "../shared/health/contract.js";
import { basicResponseSchema } from "../shared/basic-response.schema.ts.js";
import { companiesResponseSchema, companyCreateSchema, companyResponseSchema, companyUpdateSchema } from "./schemas/index.js";

const c = initContract();

const contract = c.router(
	{
		index: {
			method: 'GET',
			path: '/companies',
			responses: {
				200: companiesResponseSchema
			},
			summary: 'Get all companies'
		},
		show: {
			method: 'GET',
			path: '/companies/:id',
			responses: {
				200: companyResponseSchema
			},
			summary: 'Get one company'
		},
		update: {
			method: 'PUT',
			path: '/companies/:id',
			body: companyUpdateSchema,
			responses: {
				200: companyResponseSchema
			},
			summary: 'Update one company'
		},
		create: {
			method: 'POST',
			path: '/companies',
			body: companyCreateSchema,
			responses: {
				201: companyResponseSchema
			},
			summary: 'Create a new company'
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

export const companyContract = c.router({
  contract: contract,
  health: healthContract,
});
