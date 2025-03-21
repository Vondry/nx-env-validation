import z from 'zod';

export default {
  VITE_API_ORIGIN: z.string().url(),
};
