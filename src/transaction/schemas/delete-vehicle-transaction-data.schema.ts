import { z } from 'zod';

export const deleteVehicleTransactionDataSchema = z.object({
  vin: z.string(),
});
