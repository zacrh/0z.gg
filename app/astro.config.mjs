import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    site: 'https://0z.gg',
    adapter: vercel({
        analytics: true
    })
});
