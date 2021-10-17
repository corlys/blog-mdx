import fs from "fs";
import path from "path";

// @dev return path name to posts directory
export const POSTS_PATH = path.join(process.cwd(), "/src/posts");

// @dev return array of files inside posts folder
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((p) => /\.mdx?$/.test(p));
