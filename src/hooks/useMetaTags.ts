import { useEffect } from 'react';

export interface MetaTagsOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  author?: string;
  keywords?: string[];
  schemaData?: Record<string, any>;
}

const BRAND_NAME = 'Life Line Skills Academy';
const DEFAULT_SITE_URL = 'https://lifelineskillsacademy.com.np';

function setOrUpdateMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOrUpdateCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setOrUpdateJsonLd(schemaData?: Record<string, any>): void {
  const SCRIPT_ID = 'schema-structured-data';
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (!schemaData) {
    if (script) {
      script.remove();
    }
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schemaData);
}

/**
 * Custom React hook to dynamically update page document title, meta descriptions,
 * OpenGraph, Twitter social cards, canonical URL, and Schema.org JSON-LD.
 */
export function useMetaTags({
  title,
  description,
  canonicalPath,
  type = 'website',
  image,
  publishedTime,
  author,
  keywords,
  schemaData
}: MetaTagsOptions): void {
  useEffect(() => {
    // 1. Format page title (ensures brand suffix if not already present)
    const fullTitle = title.includes(BRAND_NAME) ? title : `${title} | ${BRAND_NAME}`;
    document.title = fullTitle;

    // 2. Resolve Canonical URL
    const baseUrl = typeof window !== 'undefined' && window.location.origin ? window.location.origin : DEFAULT_SITE_URL;
    const path = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '');
    const canonicalUrl = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;

    // 3. Standard SEO Meta Tags
    setOrUpdateMeta('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setOrUpdateMeta('name', 'keywords', keywords.join(', '));
    }
    setOrUpdateCanonical(canonicalUrl);

    // 4. OpenGraph Tags
    setOrUpdateMeta('property', 'og:title', fullTitle);
    setOrUpdateMeta('property', 'og:description', description);
    setOrUpdateMeta('property', 'og:type', type);
    setOrUpdateMeta('property', 'og:url', canonicalUrl);
    setOrUpdateMeta('property', 'og:site_name', `${BRAND_NAME} Pvt. Ltd.`);
    if (image) {
      setOrUpdateMeta('property', 'og:image', image);
    }
    if (type === 'article' && publishedTime) {
      setOrUpdateMeta('property', 'article:published_time', publishedTime);
    }
    if (type === 'article' && author) {
      setOrUpdateMeta('property', 'article:author', author);
    }

    // 5. Twitter / X Cards
    setOrUpdateMeta('name', 'twitter:card', 'summary_large_image');
    setOrUpdateMeta('name', 'twitter:title', fullTitle);
    setOrUpdateMeta('name', 'twitter:description', description);
    if (image) {
      setOrUpdateMeta('name', 'twitter:image', image);
    }

    // 6. Schema.org JSON-LD structured data
    setOrUpdateJsonLd(schemaData);

    // Optional Cleanup when unmounting
    return () => {
      // Keep head clean if leaving detail view
      const script = document.getElementById('schema-structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [
    title,
    description,
    canonicalPath,
    type,
    image,
    publishedTime,
    author,
    JSON.stringify(keywords),
    JSON.stringify(schemaData)
  ]);
}

/**
 * Reusable MetaTags component for declarative JSX usage if preferred.
 */
export const MetaTags: React.FC<MetaTagsOptions> = (props) => {
  useMetaTags(props);
  return null;
};
