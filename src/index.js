
import { onRequestPost } from '../functions/api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');

    if (path === '/api/contact') {
      if (request.method !== 'POST') {
        return Response.json(
          { error: 'method_not_allowed' },
          {
            status: 405,
            headers: { Allow: 'POST' },
          }
        );
      }

      return onRequestPost({ request, env });
    }

    return env.ASSETS.fetch(request);
  },
};

