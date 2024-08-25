const fs = require('fs');
const path = require('path');

// 定义要插入的组件导入语句
const linkCardImport = `import { LinkCard, LinkCardContainer } from 'components/LinkCard';\n`;
const postImgImport = `import PostImg from 'components/PostImg';\n`;

// 定义匹配独占一行的 Markdown 超链接和图片语法的正则表达式
const linkRegex = /^\s*\[([^\]]+)\]\(([^)]+)\)\s*$/gm;
const imgRegex = /^\s*!\[([^\]]*)\]\(([^)]+)\)\s*$/gm;

// 递归扫描目录下的所有文件
function scanDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        let filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            scanDirectory(filePath);
        } else {
            // 如果文件是 .md 扩展名，将其重命名为 .mdx
            if (filePath.endsWith('.md')) {
                const newFilePath = filePath.replace(/\.md$/, '.mdx');
                fs.renameSync(filePath, newFilePath);
                filePath = newFilePath;
            }

            // 处理 .mdx 文件
            if (filePath.endsWith('.mdx')) {
                processMDXFile(filePath);
            }
        }
    });
}

// 处理每个 .mdx 文件
function processMDXFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // 检查是否已存在 LinkCard 和 PostImg 的导入语句
    const hasLinkCardImport = content.includes('import { LinkCard, LinkCardContainer } from \'components/LinkCard\';');
    const hasPostImgImport = content.includes('import PostImg from \'components/PostImg\';');

    // 检查并替换独占一行的 Markdown 超链接语法
    if (linkRegex.test(content)) {
        if (!hasLinkCardImport) {
            content = linkCardImport + content;
            modified = true;
        }
        content = content.replace(linkRegex, (match, text, href) => {
            return `\n<LinkCardContainer>\n    <LinkCard href="${href}" />\n</LinkCardContainer>\n`;
        });
    }

    // 检查并替换独占一行的 Markdown 图片语法
    if (imgRegex.test(content)) {
        if (!hasPostImgImport) {
            content = postImgImport + content;
            modified = true;
        }
        content = content.replace(imgRegex, (match, alt, src) => {
            return `\n<PostImg src="${src}"/>\n`;
        });
    }

    // 在最后一个 import 语句后插入一个空行
    if (modified) {
        content = content.replace(/(import .+?;\n)(?!import )/, '$1\n');
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Processed: ${filePath}`);
    }
}

// 执行扫描和替换
const pagesDir = path.join(__dirname, 'pages');
scanDirectory(pagesDir);