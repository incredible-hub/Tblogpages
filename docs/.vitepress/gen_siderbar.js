import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_PATH = path.resolve(__dirname, "../");
const NO_NEED_DIRS = ["index.md", "vite.config.js", ".vitepress", "public"];

// 读一级标题作为文章标题
function getFirstHeading(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^#\s+(.*)/m);
  return match ? match[1] : path.basename(filePath, ".md");
}

function generateRoutes(dirPath, baseRoute = "") {
  const items = [];
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (NO_NEED_DIRS.includes(file)) return;

    const fullPath = path.join(dirPath, file);
    // 相当于是拿到实例，实例上有多个方法
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 递归调用了
      const subItems = generateRoutes(fullPath, `${baseRoute}/${file}`);
      items.push({
        text: file,
        collapsed: true,
        items: subItems,
      });
    } else if (stat.isFile() && path.extname(file) === ".md") {
      const title = getFirstHeading(fullPath);
      items.push({
        text: title,
        link: `${baseRoute}/${path.basename(file, ".md")}`,
      });
    }
  });

  return items;
}

function generateAllRoutes(basePath) {
  const routes = {};
  const folders = fs.readdirSync(basePath);

  folders.forEach((folder) => {
    const fullPath = path.join(basePath, folder);
    if (fs.statSync(fullPath).isDirectory() && !NO_NEED_DIRS.includes(folder)) {
      routes[`/${folder}`] = generateRoutes(fullPath, `/${folder}`);
    }
  });

  return routes;
}

const siderBar = generateAllRoutes(BASE_PATH);
export default siderBar;
