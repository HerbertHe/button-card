import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts", "src/common/index.ts", "src/types/index.ts"],
    clean: true,
    dts: true,
    format: ["esm"],
    outDir: "dist",
})
