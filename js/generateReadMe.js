const fs = require("fs");

path = "_posts/";
const posts = [];

const getPost = (file) => {
  fs.readFile(path + file, "utf8", (err, data) => {
    if (err) console.log(err);
    else {
      const titleStartIndex = data.indexOf("title:") + 7;
      const titleEndIndex = data.indexOf("date:") - 1;
      const title = data.substring(titleStartIndex, titleEndIndex);

      const contentStartIndex = data.indexOf("---", 2) + 3;
      const content = data.substring(contentStartIndex, data.length);

      const post = {
        title: title,
        content: content,
      };
      return post;
    }
  });
};

fs.readdir(path, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      const post = getPost(file);
      posts.push(post);
    });
  }
});

const getTitleLink = (title) => {
  return "#" + title.replace(/[.:]/g, "").replace(/\s/g, "-");
};

const getTableOfContents = () => {
  let tableOfContents = "";
  for (const post in posts) {
    const title = post.title;
    const link = getTitleLink(title);
    tableOfContents += `- [${title}](${link})`;
    tableOfContents += "\n";
  }
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

  content += getTableOfContents();
  content += "\n\n";

  for (const post in posts) {
    content += getContent(post);
    content += "\n\n";
  }

  content += "[⬆️ Back to the Top](#-programming-guide-and-learning-notes)";

  fs.writeFileSync(fileName, content);
};

generateReadme();
