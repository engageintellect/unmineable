import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;
    throw redirect(303, '/'); // Properly redirect to the home page
  }
};
