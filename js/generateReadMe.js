const { timeLog } = require("console");
const fs = require("fs");

const path = "_posts/";

const getPost = (file) => {
  const data = fs.readFileSync(path + file, 'utf8');

  const titleStartIndex = data.indexOf("title:") + 8;
  const titleEndIndex = data.indexOf("date:") - 2;
  const title = data.substring(titleStartIndex, titleEndIndex);

  const contentStartIndex = data.indexOf("---", 2) + 3;
  const content = data.substring(contentStartIndex, data.length).trim();

  return {
    title: title,
    content: content
  };
}

let posts = [];

const files = fs.readdirSync(path);
files.forEach((file) => {
  const post = getPost(file);
  posts.push(post);
})

const getTitleLink = (title) => {
  return "#" + title.replace(/[.:]/g, "").replace(/\s/g, "-");
};

const getTableOfContents = () => {
  let tableOfContents = "";
  for (const post of posts) {
    const title = post.title;
    const link = getTitleLink(title);
    tableOfContents += `- [${title}](${link})`;
    tableOfContents += "\n";
  }
  return tableOfContents;
};

const getContent = (post) => {
  let content = `## ${post.title}`;
  content += "\n\n";
  content += post.content;
  return content;
};


const generateReadme = () => {
  const fileName = "README.md";

  let content = "# 📝 Programming Guides and Learning Notes\n\n";

  const tableOfContents = getTableOfContents();
  content += tableOfContents;
  content += "\n\n";

  for (const post of posts) {
    content += getContent(post);
    content += "\n\n";
  }

  content += "[⬆️ Back to the Top](#-programming-guides-and-learning-notes)";

  fs.writeFileSync(fileName, content);
};

generateReadme();
