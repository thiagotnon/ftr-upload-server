import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),

  CLOUDLFARE_ACCOUNT_ID: z.string(),
  CLOUDLFARE_ACCESS_KEY_ID: z.string(),
  CLOUDLFARE_SECRETE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_BUCKET: z.string(),
  CLOUDFLARE_PUBLIC_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
