import { parse } from 'rss-to-json';

export async function getMediumPosts(username: string) {
  try {
    const data = await parse(`https://medium.com/feed/@${username}`);
    return data.items || [];
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
} 