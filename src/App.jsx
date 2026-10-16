import React, { useState } from 'react';
import Site from './Site.jsx';
import { usePageTracking } from './hooks/usePageTracking.js';
import { useClickTracking } from './hooks/useClickTracking.js';
import { useViewTracking } from './hooks/useViewTracking.js';

export default function App() {
  const [page, setPage] = useState(null);
  usePageTracking(page);
  useViewTracking(page);
  useClickTracking();
  return <Site onNavigate={setPage} />;
}
