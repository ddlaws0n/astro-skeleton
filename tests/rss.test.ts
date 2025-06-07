import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('RSS Feed', () => {
  it('should have an RSS feed endpoint file', () => {
    // Check that the RSS feed endpoint file exists
    const rssFilePath = path.resolve('./src/pages/rss.xml.ts');
    const fileExists = fs.existsSync(rssFilePath);

    expect(fileExists).toBe(true);

    const fileContent = fs.readFileSync(rssFilePath, 'utf-8');
    expect(fileContent).toContain('@astrojs/rss');
    expect(fileContent).toContain('export async function GET');
  });
});
