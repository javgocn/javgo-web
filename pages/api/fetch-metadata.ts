import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const title = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || document.querySelector('title')?.textContent || '';
        const description = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
        const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

        res.status(200).json({ title, description, image });
    } catch (error) {
        console.error('Error fetching metadata:', error);
        res.status(500).json({ error: 'Failed to fetch metadata' });
    }
}