import { site } from '@data/site';

export function createPageTitle(title?: string) {
  return title ? `${title} | ${site.name}` : site.defaultTitle;
}
