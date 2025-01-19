import { env } from '@/env'
import { S3Client } from '@aws-sdk/client-s3'

export const r2 = new S3Client({
  region: 'auto',
  endpoint: `${env.CLOUDLFARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.CLOUDLFARE_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDLFARE_SECRETE_ACCESS_KEY_ID,
  },
})
