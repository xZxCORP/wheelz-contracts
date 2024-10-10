import { z } from 'zod';

import { transactionSignatureSchema } from './signature.schema.js';
import { vehicleTransactionDataSchema } from './vehicle-transaction-data.schema.js';

export const vehicleTransactionSchema = z
  .object({
    timestamp: z.date(),
    dataSignature: transactionSignatureSchema,
  })
  .and(vehicleTransactionDataSchema);
