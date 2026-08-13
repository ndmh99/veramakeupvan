export const localAvif = (url: string): string | null =>
    url.startsWith('/') ? url.replace(/\.(jpe?g|png)$/i, '.avif') : null;
