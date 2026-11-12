import { getCollection, type CollectionEntry } from 'astro:content';
export async function publishedPosts() {
  return (await getCollection('diary', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}
export const postUrl = (post: CollectionEntry<'diary'>) => `/diary/${post.id.split('/').map(encodeURIComponent).join('/')}/`;
export function dateLabel(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Shanghai' }).format(date);
}
export function readMinutes(body = '') {
  const chinese = (body.match(/[\u3400-\u9fff]/g) || []).length;
  const words = body.replace(/[\u3400-\u9fff]/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(chinese / 350 + words / 200));
}
