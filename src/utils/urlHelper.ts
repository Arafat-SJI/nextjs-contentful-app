// src/utils/urlHelper.ts

/**
 * Converts a protocol-relative URL to an absolute URL.
 * @param url - The URL to convert.
 * @returns The absolute URL.
 */
export const toAbsoluteUrl = (url: string): string => {
    if (!url) return '';
    return url.startsWith('//') ? `https:${url}` : url;
};