import { z } from 'zod';

import { createVehicleTransactionDataSchema } from './create-vehicle-transaction-data.schema.js';
import { deleteVehicleTransactionDataSchema } from './delete-vehicle-transaction-data.schema.js';
import { updateVehicleTransactionDataSchema } from './update-vehicle-transaction-data.schema.js';

export const vehicleTransactionDataSchema = z.discriminatedUnion('action', [
  z.object({
    action: z.literal('create'),
    data: createVehicleTransactionDataSchema,
  }),
  z.object({
    action: z.literal('update'),
    data: updateVehicleTransactionDataSchema,
  }),
  z.object({
    action: z.literal('delete'),
    data: deleteVehicleTransactionDataSchema,
  }),
]);
