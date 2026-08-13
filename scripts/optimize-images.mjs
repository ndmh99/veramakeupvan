import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const ASSET_DIR = 'public/assets/images';
const BLOG_DIR = 'public/blog/images';
const PHOTO_QUALITY = 60;
const SCREENSHOT_QUALITY = 50;
const WEBP_QUALITY = 80;

async function toFormat(file, outPath, format, quality) {
    try {
        await sharp(file)[format]({ quality }).toFile(outPath);
        console.log(`ok  ${path.basename(outPath)}`);
    } catch (e) {
        console.error(`FAIL ${file}: ${e.message}`);
    }
}

for (const dir of [ASSET_DIR, BLOG_DIR]) {
    for (const name of await readdir(dir)) {
        if (!/\.(jpe?g|png)$/i.test(name)) continue;
        const file = path.join(dir, name);
        if (name.toLowerCase() === 'thumbnail.png') continue;
        const quality = dir === BLOG_DIR ? SCREENSHOT_QUALITY : PHOTO_QUALITY;
        await toFormat(file, file.replace(/\.(jpe?g|png)$/i, '.avif'), 'avif', quality);
        if (dir === BLOG_DIR) {
            await toFormat(file, file.replace(/\.(jpe?g|png)$/i, '.webp'), 'webp', WEBP_QUALITY);
        }
    }
}

await toFormat(path.join(ASSET_DIR, 'thumbnail.png'), path.join(ASSET_DIR, 'thumbnail.jpg'), 'jpeg', 85);
console.log('done');
