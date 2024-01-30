import fs from "fs";
import {join} from "path";
import matter from "gray-matter";
import PostType from "../interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {data, content} = matter(fileContents);

  const items: {} = {
    author: {
      picture: "/assets/blog/profile.png",
      name: 'Chanaka Rathnayaka'
    }
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items as PostType;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
  .map((slug) => getPostBySlug(slug, fields))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.createdOn > post2.createdOn ? -1 : 1));
  return posts;
}
