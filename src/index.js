import { onRequestPost } from '../functions/api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.replace(/\/+$/, '') === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', {
          status: 405,
          headers: { Allow: 'POST' },
        });
      }

      return onRequestPost({ request, env });
    }

    return env.ASSETS.fetch(request);
  },
};
