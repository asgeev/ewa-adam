import { z } from 'zod';

const envSchema = z.object({
  EWA_PHONE: z.string().optional(),
  EWA_INSTAGRAM: z.string().optional(),
  EWA_FACEBOOK: z.string().optional(),
  ADAM_PHONE: z.string().optional(),
  ADAM_INSTAGRAM: z.string().optional(),
  ADAM_FACEBOOK: z.string().optional(),
  OLA_PHONE: z.string().optional(),
  OLA_INSTAGRAM: z.string().optional(),
  OLA_FACEBOOK: z.string().optional(),
  JAREK_PHONE: z.string().optional(),
  JAREK_INSTAGRAM: z.string().optional(),
  JAREK_FACEBOOK: z.string().optional(),
  POSTGRES_URL: z.string().optional(),
  PRISMA_DATABASE_URL: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  DRIVE_URL: z.string().optional(),
  NODE_ENV: z
    .union([
      z.literal('development'),
      z.literal('testing'),
      z.literal('production'),
    ])
    .default('development'),
  // ...
});

// Validate `process.env` against our schema
// and return the result
const env = envSchema.parse(process.env);

// Export the result so we can use it in the project
export default env;
