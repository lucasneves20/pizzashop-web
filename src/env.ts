// import { z } from 'zod'

// const envSchema = z.object({
//   BASE_URL: z.string(),
//   DEV: z.boolean(),
//   MODE: z.string(),
//   PROD: z.boolean(),
//   SSR: z.boolean(),
//   VITE_URL_API: z.string().url(),
// })

// console.log(import.meta.env)
export const env = import.meta.env
