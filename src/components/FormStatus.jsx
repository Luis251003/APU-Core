import React from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

// Estado del formulario de contacto (loading / enviado / error) + honeypot anti-spam.
export default function FormStatus({ v }) {
  const errors = v.errors || {};
  const fieldErrors = ['nombre', 'correo', 'mensaje'].map((k) => errors[k]).filter(Boolean);
  return (
    <div role="status" aria-live="polite" className="mt-4 flex flex-col gap-1.5 text-sm">
      <label className="apu-sr-only" htmlFor="f-website">No completar este campo</label>
      <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={v.website || ''} onChange={v.onWebsite} className="apu-sr-only" />
      {v.status === 'loading' ? (
        <p className="m-0 flex items-center gap-2" style={{ color: 'rgb(203,213,225)' }}>
          <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Enviando tu mensaje…
        </p>
      ) : null}
      {v.status === 'success' ? (
        <p className="m-0 flex items-center gap-2" style={{ color: 'rgb(25,193,157)' }}>
          <CheckCircle2 size={16} aria-hidden="true" /> Mensaje enviado. Te responderemos pronto.
        </p>
      ) : null}
      {v.status === 'error' && v.errorMsg ? (
        <p className="m-0 flex items-start gap-2" style={{ color: 'rgb(248,113,113)' }}>
          <AlertCircle size={16} className="mt-0.5" aria-hidden="true" />
          <span>{v.errorMsg}{fieldErrors.length ? ' ' + fieldErrors.join(' ') : ''}</span>
        </p>
      ) : null}
    </div>
  );
}
