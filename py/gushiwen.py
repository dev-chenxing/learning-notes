import json
import re

# thanks @yht050511 for the gushiwen dump
# https://github.com/yht050511/gushiwen

f = open("gushiwen.json") 
data = json.load(f)

cleaned_data = []
index = 1

for poem in data:
    content_string = poem["content"]
    if re.findall("[□＿]", content_string) == []:
        content_string.replace("&nbsp;", "")
        content_list = content_string.split("<br/>")
        content = ""
        is_first_line = True
        for line in content_list:
            line = line.strip()
            if line != "":
                if is_first_line == False:
                    content = content + "<br/>"
                content = content + line
                is_first_line = False

        if len(content) < 100:
            cleaned_data.append(
                {
                    "id": index,
                    "title": poem["title"].replace("&nbsp;", " "),
                    "author": poem["author"],
                    "content": content,
                }
            )
            index = index + 1

poems = json.dumps(cleaned_data, indent=4, ensure_ascii=False)

with open("gushiwen_short.json", "w") as gushiwen:
    gushiwen.write(poems)

f.close()
