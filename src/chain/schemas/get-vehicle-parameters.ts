import { vinSchema } from '@zcorp/shared-typing-wheelz';
import { z } from 'zod';

export const getVehicleParametersSchema = z.object({
  vin: vinSchema.optional(),
  licensePlate: z.string().min(1).optional(),
});

export type GetVehicleParameters = z.infer<typeof getVehicleParametersSchema>;
