/// <reference types="vite/client" />

type ImportMetaEnvAugmented = import("@julr/vite-plugin-validate-env").ImportMetaEnvAugmented<
    typeof import("./env").default
>

// https://github.com/Julien-R44/vite-plugin-validate-env?tab=readme-ov-file#typing-importmetaenv
// eslint-disable-next-line
interface ImportMetaEnv extends ImportMetaEnvAugmented {
    // Now import.meta.env is totally type-safe and based on your `env.ts` schema definition
    // You can also add custom variables that are not defined in your schema
}
