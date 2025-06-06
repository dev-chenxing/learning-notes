# 📝 Programming Guides and Learning Notes

- [Create React Project with Vite](#Create-React-Project-with-Vite)
- [Install Node.js](#Install-Nodejs)
- [Miyoo Mini Plus Starter Guide](#Miyoo-Mini-Plus-Starter-Guide)
- [Beautiful Python Terminal Styling with Rich](#Beautiful-Python-Terminal-Styling-with-Rich)
- [Scrapy - Python Web Scraping](#Scrapy---Python-Web-Scraping)
- [Create Word Documents with Python: python-docx](#Create-Word-Documents-with-Python-python-docx)
- [Commands in Linux](#Commands-in-Linux)
- [社会工作必考点](#社会工作必考点)


## Create React Project with Vite

Requirements: Node.js

To get started with [Vite](https://vitejs.dev/guide/), open the terminal and navigate up one directory from the target directory. For example, if you would like the project scaffolded in `D:\react-with-vite`, run the below command in `D:\`.

```powershell
npm create vite@latest
```

Then, run:

```powershell
cd $PROJECT_NAME
npm install
npm run dev
```

## Install Node.js

Download Node.js (LTS) on [nodejs.org](https://nodejs.org/en).

## Miyoo Mini Plus Starter Guide

### Backup BIOS and Roms

The BIOS files from the stock operating system are located in `\RetroArch\.retroarch\system`. The Rom files are located in `\Roms`.

### Install OnionOS

Download [Onion Desktop Tools](https://github.com/schmurtzm/Onion-Desktop-Tools/blob/main/README.md) and run the `_Onion Desktop Tools - Launcher.bat` to **format SD card in FAT32 and install Onion**.

Once it's done, eject the SD card from our computer. Plug it into the Miyoo Mini Plus and power it on. The installation process will begin automatically.

### Package Manager

After the installation is complete, install emulators and apps in the package manager:

-   NEC - TurboGrafx-16
-   Nintendo - DS
-   Nintendo - GBA
-   Nintendo - Game Boy Color
-   Nintendo - NES
-   Nintendo - SNES
-   Sega - Genesis
-   Sega - Master System
-   Sega - CD
-   Sega - Game Gear

Press START to install. Then shut down the device, eject the SD card, and put it back into the computer.

### Install BIOS

Move the following BIOS files to the `\BIOS` folder:

-   SEGA CD: `bios_CD_E.bin`, `bios_CD_J.bin`, `bios_CD_U.bin`
-   Sega Game Gear: `bios.gg`
-   Game Boy: `gb_bios.bin`
-   Game Boy Advance: `gba_bios.bin`
-   Game Boy Color: `gbc_bios.bin`
-   Neo Geo: `neogeo.zip` (Keep it in both the `/BIOS` folder and the `/Roms/NEOGEO` folder to ensure best compatibility)
-   PlayStation: `scph5501.bin`
-   PC Engine: `syscard1.pce`, `syscard2.pce`, `syscard3.pce`

### Install Roms

Move the ROM files to the subfolders within the `\Roms` folder:

-   Arcade: `ARCADE`
-   NES: `FC`
-   Game Boy: `GB`
-   Game Boy Advance: `GBA`
-   Game Boy Color: `GBC`
-   Sega Game Gear: `GG`
-   Sega Genesis: `MD`
-   Sega - Master System: `MS`
-   NDS: `NDS`
-   Neo Geo: `NEOGEO`
-   TurboGrafx-16: `PCE`
-   PlayStation: `PS`
-   Sega CD: `SEGACD`
-   SNES: `SFC`

More information please check the [Onion Docs](https://onionui.github.io/docs/emulators/nes)!

### Install Themes and Icons

Themes and icon packs can be downloaded from [here](https://github.com/OnionUI/Themes/blob/main/README.md).

Unzip the downloaded theme to the `/Themes` folder and apply it with the ThemeSwitcher app.

Unzip the downloaded icon pack to the `/Icons` folder. To install the icon pack, use the Tweaks app, 'Apperance' -> 'Icons packs...' -> 'Apply icon pack...'.

## Beautiful Python Terminal Styling with Rich

Install [Rich](https://rich.readthedocs.io/en/latest/introduction.html)

```powershell
pip install rich
```

Import the alternative `print` function which does basic syntax highlighting for the printed text.

```python
from rich import print
```

It is also requried for printing Rich _renderables_, such as Panel.

```python
from rich.panel import Panel

print(
    Panel(
        "Lorem ipsum dolor sit amet",
        style="bold red",               # set the font color and style
        border_style="bright_white",    # set the border color
        width=48,                       # set the panel width
    )
)
```

## Scrapy - Python Web Scraping

### Install Scrapy

First, create a new virtual environment.

```powershell
python -m pip install --upgrade pip # upgrade pip
python -m venv venv
venv\Scripts\activate               # or source venv/bin/activate if you are on Linux
```

Then, install the Scrapy package.

```powershell
pip install scrapy
```

You should also install IPython, which makes the Python console more user-friendly, since you will be using the Scrapy shell a lot during the development of Scrapy spiders.

```powershell
pip install ipython
```

### Start Scrapy Project

Start a Scrapy project in the current directory. Note that the project name should be the same with the folder name.

```powershell
scrapy startproject <project_name> .
scrapy genspider example example.com
```

Here, `example` would be the name of the spider, and `example.com` would be the allowed domain.

### Run the Scrapy Spider

```powershell
scrapy crawl example
```

## Create Word Documents with Python: python-docx

Install the [python-docx](https://python-docx.readthedocs.io/en/latest/) package

```powershell
pip install python-docx
```

Here is an example of what `python-docx` can do:

![](py/Lorem Ipsum.png)

```python
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

file_name = "Lorem Ipsum"
directory = ""

# create the document
doc = Document()                                            

# set margin to 2 cm
section = doc.sections[0]
section.left_margin, section.right_margin = Cm(2), Cm(2)    

normal_style = doc.styles["Normal"]
normal_font = normal_style.font
normal_font.name = "Helvetica"                  # set font family
normal_font.size = Pt(12)                       # set font size to 12pt
normal_paragraph_format = normal_style.paragraph_format   
normal_paragraph_format.line_spacing = Pt(14)   # set line spacing to 14pt

# add a centered paragraph
center_paragraph = doc.add_paragraph("Lorem ipsum")
center_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER      

# add a plain paragraph
doc.add_paragraph("Lorem ipsum dolor sit amet, ")           

# add a paragraph with color red
red_paragraph = doc.add_paragraph("consectetur adipiscing elit, ")
red_paragraph.runs[0].font.color.rgb = RGBColor(0xFF, 0x00, 0x00)  

# add a paragraph with color blue
blue_paragraph = doc.add_paragraph(
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
blue_paragraph.runs[0].font.color.rgb = RGBColor(0x00, 0x00, 0xFF) 

# save the document to the output path
output_path = f"{directory}{file_name}.docx"
doc.save(output_path)
```

## Commands in Linux

### pacman

Installing Packages using the Pacman

```bash
sudo pacman -S arduino-ide
```

Upgrading packages

```bash
sudo pacman -Suy
```

### 7z

Extract all files from an archive to the current directory with full paths

```bash
7z x arduino-ide_2.3.3_Linux_64bit.zip
```

## 社会工作必考点

# 社会工作的内涵、原则及主要领域
## 社会工作的含义与特点

#### 一、社会工作的含义

社会工作是社会建设的重要组成部分。社会工作是参与社会治理的重要力量。

#### 二、社会工作的特点

1. 专业助人活动
2. 注重专业价值
3. 强调专业方法
4. 注重实践
5. 互动合作
6. 多方协同

**※ 易混淆考点：互动合作 VS 多方协同**
互动合作指的是社工与服务对象之间的互动交流。
多方协同指的是社工和其他人（不是服务对象）一起合作，共同帮助服务对象解决困难。

## 社会工作的目标

服务对象层面：
- 解救危难（涉及服务对象的生命健康安全）
- 缓解困难（涉及服务对象的除了生死攸关之外的困难）
- 激发潜能（激发服务对象潜能解决自身问题）
- 促进发展（教育培训等）

## 社会工作的功能

#### 社会工作在服务对象层面的功能：
1. 促进服务对象的正常生活
2. 恢复弱化的功能
3. 促进人的发展
4. 促进人与社会环境的相互适应
#### 社会工作在社会层面的功能：
1. 维护社会秩序
2. 建构社会资本
3. 促进社会和谐
4. 推动社会进步

## 社会工作的要素

1. 社会工作的服务对象
2. 社会工作者：社会工作者的素质、经验和能力直接影响服务成效。
3. 价值观
4. 专业助人方法
5. 助人活动

## 社会工作者的角色

1. 治疗者：针对心理及行为问题开展工作。
2. 使能者：调动服务对象自身的能力和资源，发挥服务对象的潜在能力。
3. 倡导者：向服务对象动员、鼓励、呼吁。
4. 联系人：帮助服务对象与拥有资源的服务机构联系。
5. 教育者：教给服务对象新知识、新方法、新技能。
6. 政策影响者。

## 社会工作的主要领域

#### 一、主要服务领域
- 儿童及青少年社会工作
- 老年社会工作
- 妇女社会工作
- **残疾人社会工作**：包括康复服务、就业支持、无障碍环境建设等。
- 司法社会工作
- 优抚安置社会工作
- 社会救助社会工作
- 减贫社会工作
- 家庭社会工作
- 学校社会工作：主要有三种方式
	- **治疗型**学校社会工作是针对“问题学生”失常的心理和行为而开展的工作；
	- **变迁型**学校社会工作是帮助学生适应激烈的社会变迁而开展的工作，包括各种辅导活动；
	- **社区-学校社会工作**，包括联系学生家长，实现家-校沟通，对离校学生提供追踪服务等。
- 社区社会工作
- 医务社会工作
- 企业社会工作


# 社会工作的价值观和专业伦理

**我国社会工作价值观：** 以人为本，回应需要；接纳和尊重；个别化和非评判；注重和谐，促进发展；平等待人，注重参与；权利与责任并重；个人发展与社会发展相结合。
#### 社会工作价值观的操作原则：

1. 基本信念：尊重、独特性、相信人能改变
2. 实践原则
	1. 接纳
	2. 非评判
	3. 个别化：针对不同人的需求，让每一个人满意
	4. 保密：一般情况下，涉及到服务对象的隐私，社会工作者应保密，前提是
		1. 服务对象行为在法律法规允许下；
		2. 在服务对象本人及周围人的生命健康财产不遭受威胁下
	5. 当事人自决

#### 社会工作专业伦理的基本内容

社会工作专业伦理的主要内容包括以下几个方面：
1. 对服务对象
2. 对同事：在工作的过程中，重视同事的建议和想法
3. 对服务机构：遵守机构规定、落实机构服务宗旨、负责管理个案
4. 作为专业人员：提供专业服务、专业知识的拓展
5. 对社会工作专业：专业的评估研究
6. 对全社会

#### 社会工作实践中的伦理决定的原则

1. 保护生命原则：劝说打消自杀的念头
2. 差别平等原则：个别化
3. 自由自主原则：当事人自决
4. 最小伤害原则
5. 生命质量原则：注重生命质量的提升，提高服务对象的身体及心理健康指数，鼓励服务对象工作自食其力
6. 隐私保密原则
7. 真诚原则
伦理是操作层面的价值观，是实践中的行为守则。

#### 社会工作专业伦理对社会工作的作用

1. 评判专业服务是否适当：为社会工作者开展实务提供依据和指导，确保服务的专业性；
2. 保障服务对象的权利；
3. 减轻社会工作者伦理抉择上的压力及两难：指引社会工作者作出决定和行为，为其提供抉择的基本依据；
4. 帮助社会工作者自我反思及价值澄清；
5. 奠定社会对社会工作信任的基础。

# 人类行为与社会环境

## 人类行为

### 人类需要的层次和类型

#### 马斯洛的需要层次论
1. 生理需求
2. 安全需求
3. 爱与归属需求
4. 尊重的需求
5. 自我实现的需求
#### 阿尔德弗尔的ERG理论
1. 生存的需要-E (Existence)
2. 关系的需要-R (Relatedness)
3. 成长的需要-G (Growth)

- 不需要强调需要层次的顺序
- 当较高级需要受到挫折时，可能会降而求其次
- 某种需要在得到基本满足后，其强烈程度可能会增强

#### 莱恩·多亚尔和伊恩·高夫的需求理论
1. 基本需要：身体健康；自主性
2. 中介需要：在所有文化中能够促进基本需要的产品、服务、活动和关系的特性
	- 11种：营养的食物和洁净的水；具有保护功能的住房；无害的工作环境；无害的自然环境；适当的保障；童年期的安全；重要的初级关系；环境安全；经济安全；适当的教育；安全的生育控制与分娩。

#### 同辈群体对个体行为的影响
- 对个体的认知发展、行为塑造、情绪表达、精神追求及支持系统均有直接影响

### 人类行为的类型和特点

#### 人类行为的特点
1. 适应性：适应环境同时改变环境
2. 多样性
3. 发展性
4. 可控性：有意识地控制和调节
5. 整合性

## 社会环境

### 社会环境的含义和特点

#### 家庭教养模式的类型
1. 娇纵型：爱 + 不管
2. 支配型：爱 + 管
3. 专制型：不爱 + 管
4. 放任型：不爱 + 不管
5. 冲突型：家庭成员间人际关系紧张、不和谐、有矛盾
6. 民主型：互相尊重、平等交流
### 人生发展阶段

#### 婴幼儿（0~3岁）
- 社会性发展阶段：
	- 0~6个月：单纯社会化阶段，对陌生人也会微笑
	- 7个月~2岁：社会性情感连接建立阶段，偏爱熟悉的人
	- 2~3岁：伙伴关系发展阶段

# 个案工作方法

## 危机介入模式

#### 危机的发展阶段
1. 开始阶段：危机发生，习惯性解决，失败
2. 解组阶段：情绪困扰，能力下降，平衡被打乱
3. 恢复阶段：调整行为方式，寻找新的办法
4. 重组阶段：重拾自信，恢复平衡

[⬆️ Back to the Top](#-programming-guides-and-learning-notes)