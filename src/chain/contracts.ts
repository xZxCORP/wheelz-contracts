import { initContract } from '@ts-rest/core';

import { healthContract } from '../shared/health/contract.js';

const c = initContract();

export const chainContract = c.router({
  health: healthContract,
});
