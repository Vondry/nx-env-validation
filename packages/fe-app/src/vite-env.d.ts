/// <reference types="vite/client" />

type ImportMetaEnvAugmented = import("@julr/vite-plugin-validate-env").ImportMetaEnvAugmented<
    typeof import("./env").default
>

// https://github.com/Julien-R44/vite-plugin-validate-env?tab=readme-ov-file#typing-importmetaenv
type ImportMetaEnv = ImportMetaEnvAugmented
