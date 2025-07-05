export interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  title: string;
  excerpt: string;
  tags: string[];
  thumbnail: string;
  views: number;
  likes: number;
  date: string; // ISO date string
  category: string;
}

export const posts: Post[] = [
  {
    id: 1,
    author: 'Alice',
    authorAvatar: 'https://via.placeholder.com/40',
    title: 'Khám phá trí tuệ nhân tạo',
    excerpt: 'Giới thiệu tổng quan về AI và những ứng dụng nổi bật...',
    tags: ['AI', 'Công nghệ'],
    thumbnail: 'https://via.placeholder.com/300x150',
    views: 2000,
    likes: 150,
    date: '2025-07-01',
    category: 'AI'
  },
  {
    id: 2,
    author: 'Bob',
    authorAvatar: 'https://via.placeholder.com/40',
    title: 'Bắt đầu với React',
    excerpt: 'Những bước cơ bản để xây dựng ứng dụng React...',
    tags: ['Lập trình', 'React'],
    thumbnail: 'https://via.placeholder.com/300x150',
    views: 1800,
    likes: 120,
    date: '2025-07-02',
    category: 'Lập trình'
  },
  {
    id: 3,
    author: 'Charlie',
    authorAvatar: 'https://via.placeholder.com/40',
    title: 'Xu hướng công nghệ 2025',
    excerpt: 'Cùng điểm qua những xu hướng nổi bật trong năm 2025...',
    tags: ['Công nghệ'],
    thumbnail: 'https://via.placeholder.com/300x150',
    views: 2500,
    likes: 200,
    date: '2025-06-30',
    category: 'Công nghệ'
  }
]
