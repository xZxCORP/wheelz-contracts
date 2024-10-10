import { z } from 'zod';

import { vehicleSchema } from './vehicle.schema.js';

export const updateVehicleTransactionDataSchema = z.object({
  vin: z.string(),
  changes: vehicleSchema.omit({ vin: true }).partial(),
});
