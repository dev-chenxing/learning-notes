# 📝 Programming Guide and Learning Notes

-   [Install Node.js](#Install-Nodejs)
-   [Create React Project with Vite](#Create-React-Project-with-Vite)
-   [Miyoo Mini Plus Starter Guide](#Miyoo-Mini-Plus-Starter-Guide)
-   [Scrapy - Python Web Scraping](#Scrapy---Python-Web-Scraping)
-   [Create Word Files with Python](#Create-Word-Files-with-Python)

## Install Node.js

Download Node.js (LTS) on [nodejs.org](https://nodejs.org/en).

## Create React Project with Vite

Requirements: [Node.js](#install-nodejs)

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

## Miyoo Mini Plus Starter Guide

Last Updated: 2024/4/16

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

## Scrapy - Python Web Scraping

Last Updated: 2024/4/18

### Install Scrapy

First, create a new virtual environment.

```powershell
python -m pip install --upgrade pip # upgrade pip
python -m venv venv
venv\Scripts\activate
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

## Create Word Files with Python

Last Updated: 2024/4/19

Install the [python-docx](https://python-docx.readthedocs.io/en/latest/) package

```powershell
pip install python-docx
```

Here is an example of what `python-docx` can do:

```python
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

def set_doc_style(doc):
    section = doc.sections[0]
    section.left_margin, section.right_margin = Cm(2), Cm(2)       # set document margin to 2 cm

    normal_style = doc.styles["Normal"]
    normal_font = normal_style.font
    normal_font.name = "Helvetica"                                 # set document font family for English text
    normal_font.name = "Microsoft YaHei"                           # set document font family for Chinese text
    normal_font.size = Pt(12)                                      # set document font size to 12pt
    normal_paragraph_format = normal_style.paragraph_format   
    normal_paragraph_format.line_spacing = Pt(14)                  # set document line spacing to 14pt

file_name = "Lorem Ipsum"
directory = "."

doc = Document()                                                   # create the document
set_doc_style(doc)                                                 # set the document style

center_paragraph = doc.add_paragraph("Lorem ipsum")
center_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER  # add a center paragraph

doc.add_paragraph("Lorem ipsum dolor sit amet, ")                  # add a plain paragraph

red_paragraph = doc.add_paragraph("consectetur adipiscing elit, ")
red_paragraph.runs[0].font.color.rgb = RGBColor(0xFF, 0x00, 0x00)  # add a paragraph with color red

blue_paragraph = doc.add_paragraph("sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
blue_paragraph.runs[0].font.color.rgb = RGBColor(0x00, 0x00, 0xFF) # add a paragraph with color blue

output_path = f"{directory}{file_name}.docx"
doc.save(output_path)                                              # save the document to the output path
```

[⬆️ Back to the Top](#-programming-guide-and-learning-notes)
