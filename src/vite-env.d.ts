/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NG_APP_PRIMEUI_LICENSE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
