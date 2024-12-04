import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Appbar from './Appbar.tsx';

createRoot(document.getElementById('root')!).render(
<>
  <StrictMode>
    <Theme>
      <Appbar/>
      <ThemePanel/>
    </Theme>
  </StrictMode>
</>
)
