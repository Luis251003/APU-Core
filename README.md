# APU CORE — Sitio web

Sitio de APU CORE construido con **React + Vite**, **Tailwind CSS**, **Lucide Icons**, medición con **GA4 / Google Tag Manager** y **Microsoft Clarity**, y formulario de contacto vía **Resend** usando una función serverless de **Vercel**.

## 1. Requisitos

- Node.js 18.18 o superior (recomendado 20 LTS)
- npm 9+
- Cuenta en Resend, Vercel, Google Analytics / Tag Manager y Microsoft Clarity (para producción)

## 2. Instalar dependencias

```bash
npm install
```

Esto genera también `package-lock.json`; súbelo al repositorio.

## 3. Ejecutar localmente

```bash
cp .env.example .env     # completa los valores
npm run dev
```

Abre http://localhost:5173. El endpoint `/api/contact` también funciona en local (Vite lo ejecuta con la misma función de `api/contact.js`). Para simular Vercel completo puedes usar `npx vercel dev`.

## 4. Build de producción

```bash
npm run build
npm run preview   # sirve /dist para revisarlo
```

## 5. Variables de entorno

| Variable | Tipo | Uso |
|---|---|---|
| `VITE_GA_MEASUREMENT_ID` | pública | ID de GA4 (`G-…`). Solo si NO usas GTM. |
| `VITE_GTM_ID` | pública | ID de GTM (`GTM-…`). Si existe, tiene prioridad sobre GA4 directo. |
| `VITE_CLARITY_PROJECT_ID` | pública | ID del proyecto de Clarity. |
| `VITE_WHATSAPP_NUMBER` | pública | Número en formato internacional, solo dígitos (`51987654321`). |
| `VITE_WHATSAPP_MESSAGE` | pública | Mensaje prellenado de WhatsApp. |
| `VITE_SITE_URL` | pública | Dominio final (`https://…`) para canonical y Open Graph. |
| `VITE_ANALYTICS_DEBUG` | pública | `true` muestra los eventos en consola. |
| `RESEND_API_KEY` | **privada** | API key de Resend. |
| `CONTACT_TO_EMAIL` | **privada** | Destinatario(s) del formulario, separados por coma. |
| `CONTACT_FROM_EMAIL` | **privada** | Remitente verificado en Resend. |

Las variables `VITE_*` se incluyen en el JavaScript público: nunca pongas secretos con ese prefijo. Las privadas solo existen en el servidor (función `api/contact.js`).

## 6. Configurar Resend

1. Crea una cuenta en https://resend.com y genera una **API Key** → `RESEND_API_KEY`.
2. En **Domains**, agrega y verifica tu dominio (registros DNS). Luego usa un remitente de ese dominio en `CONTACT_FROM_EMAIL` (ej. `APU CORE Web <web@tudominio.com>`).
   - Sin dominio verificado puedes probar con `onboarding@resend.dev`, pero Resend solo entregará al correo de tu propia cuenta.
   - No se puede usar una dirección `@gmail.com` como remitente.
3. `CONTACT_TO_EMAIL` es donde llegan los mensajes (por defecto `apucore.peru@gmail.com`). El botón "Responder" del correo contesta directamente al visitante.

El formulario valida nombre, correo y mensaje en el navegador y de nuevo en el servidor, bloquea envíos múltiples mientras está enviando, e incluye un campo honeypot anti-spam.

## 7. Configurar GA4 (sin GTM)

1. En Google Analytics crea una propiedad GA4 y un flujo web → copia el **ID de medición** (`G-…`) en `VITE_GA_MEASUREMENT_ID`.
2. Deja `VITE_GTM_ID` vacío.
3. El `page_view` se envía manualmente en cada cambio de ruta (el automático está desactivado para no duplicar).
4. En GA4 → Administrar → Definiciones personalizadas, registra como dimensiones los parámetros que quieras reportar: `page_name`, `section_name`, `cta_name`, `service_name`, `case_name`, `device_type`, `link_url`, `profile_name`.
5. Marca como **eventos clave** `contact_form_success`, `whatsapp_click` y `email_click`.

### Eventos implementados

| Evento | Cuándo |
|---|---|
| `page_view` | Cada cambio de página |
| `contact_form_start` | Primer foco/escritura en el formulario |
| `contact_form_submit` | Envío con datos válidos |
| `contact_form_success` / `contact_form_error` | Resultado del envío (error incluye `error_type`) |
| `whatsapp_click` / `email_click` | Clic en enlaces `wa.me` / `mailto:` |
| `external_link_click` | Clic en enlaces a otros dominios |
| `cta_click` | Clic en navegación y CTAs internos |
| `service_view` / `service_click` | Categoría de Apps Mobile / Plataformas Web visible / clic en una pantalla |
| `case_study_view` / `case_study_click` | Tarjeta o página de caso vista / clic en una solución |
| `team_profile_view` | Perfil del equipo visible en Nosotros |

Todos incluyen `page_name` y `device_type`. Para agregar uno nuevo: declararlo en `src/lib/events.js` y llamar `track(EVENTS.NUEVO, { ... })`. Los clics se capturan de forma centralizada en `src/hooks/useClickTracking.js` (atributos `data-cta`), y las vistas en `src/hooks/useViewTracking.js` (atributos `data-view`).

## 8. Configurar Google Tag Manager (opcional, recomendado a futuro)

1. Crea un contenedor web en GTM y copia el ID en `VITE_GTM_ID` (deja `VITE_GA_MEASUREMENT_ID` vacío para no cargar GA4 dos veces).
2. En GTM crea una etiqueta **Google tag** con tu ID `G-…` y en su configuración agrega el parámetro `send_page_view = false`. Activador: *Initialization – All Pages*.
3. Crea variables de **capa de datos** para `page_name`, `section_name`, `cta_name`, `service_name`, `case_name`, `device_type`, `link_url`, `page_path`, `page_title`.
4. Crea una etiqueta **GA4 Event** con nombre de evento `{{Event}}` y esos parámetros, con un activador *Evento personalizado* que coincida con la regex:
   `^(page_view|contact_form_(start|submit|success|error)|whatsapp_click|email_click|cta_click|service_(view|click)|case_study_(view|click)|team_profile_view|external_link_click)$`
5. Publica el contenedor.

## 9. Configurar Microsoft Clarity

1. Crea un proyecto en https://clarity.microsoft.com y copia el **Project ID** en `VITE_CLARITY_PROJECT_ID`.
2. Grabaciones, mapas de calor, rage clicks, dead clicks y profundidad de scroll se activan automáticamente.
3. El sitio envía a Clarity la etiqueta `page_name` y los mismos eventos personalizados, para filtrar sesiones.
4. Opcional: en Clarity → Settings → Setup, conecta tu propiedad de GA4.
5. Si usas GTM, puedes cargar Clarity desde GTM y dejar `VITE_CLARITY_PROJECT_ID` vacío (no ambos).

## 10. Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel → **Add New Project** → importa el repositorio. Vercel detecta Vite automáticamente (build `npm run build`, output `dist`).
3. En **Settings → Environment Variables** agrega todas las variables del punto 5.
4. Deploy. La función `api/contact.js` se publica en `/api/contact` y `vercel.json` redirige las rutas internas (`/nosotros`, `/apps-mobile`, etc.) a la SPA.
5. Conecta tu dominio y actualiza `VITE_SITE_URL`.

## Estructura

```
api/contact.js          Función serverless (Resend)
public/images/          Imágenes del sitio (rutas /images/…)
public/favicon.png      Favicon
src/main.jsx            Entrada: estilos + analítica
src/App.jsx             Hooks de medición
src/Site.jsx            Estado y lógica (navegación, carruseles, lightbox, formulario)
src/Layout.jsx          Header + página activa + Footer
src/pages/              Una página por ruta
src/components/         Header, MobileMenu, Footer, FormStatus
src/hooks/              Tracking de páginas, clics y vistas
src/lib/                Analytics, eventos, rutas, SEO, validación, datos de contacto
src/index.css           Tailwind + estilos globales, breakpoints y estados hover
```

Rutas: `/`, `/apps-mobile`, `/plataformas-web`, `/soluciones`, `/soluciones/telecomunicaciones`, `/soluciones/e-commerce`, `/soluciones/productos-internos`, `/nosotros`, `/contacto`.

> Nota: los estilos del diseño se conservan como estilos inline para mantener el diseño exacto. Tailwind está configurado (con *preflight* desactivado para no alterar nada) y listo para nuevos componentes.
