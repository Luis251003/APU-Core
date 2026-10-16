export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return Response.json({
        diagnostico: 'worker-nuevo-activo',
        metodo: request.method,
        ruta: url.pathname,
      });
    }

    return env.ASSETS.fetch(request);
  },
};

