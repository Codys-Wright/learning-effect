/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_DEPLOY_URL: string;
  readonly VITE_ENV: string;
  readonly VITEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.ts?worker" {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}

declare module "./worker.ts?worker" {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}
