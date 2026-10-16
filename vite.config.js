import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// En desarrollo, /api/contact se ejecuta localmente con la misma función que usa Vercel
// en producción, para que el formulario funcione con "npm run dev".
function devApi() {
  return {
    name: 'apucore-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        const env = loadEnv(server.config.mode, process.cwd(), '');
        for (const [k, val] of Object.entries(env)) if (process.env[k] === undefined) process.env[k] = val;
        res.status = (code) => { res.statusCode = code; return res; };
        res.json = (obj) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); return res; };
        try {
          let raw = '';
          for await (const chunk of req) raw += chunk;
          req.body = raw ? JSON.parse(raw) : {};
        } catch {
          return res.status(400).json({ error: 'invalid_json' });
        }
        try {
          const mod = await server.ssrLoadModule('/api/contact.js');
          await mod.default(req, res);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'server_error' });
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), devApi()],
  build: { sourcemap: false, chunkSizeWarningLimit: 900 }
});
