# 📝 Programming Guide and Learning Notes

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

## HTML Color Names

Last Updated: 2024/4/18

#### Pink

| Color                                                                                               | Name            | Hex     |
| --------------------------------------------------------------------------------------------------- | --------------- | ------- |
| <img src="https://raw.githubusercontent.com/amaliegay/learning-notes/main/assets/color/Pink.svg" /> | Pink            | #FFC0CB |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightPink" /></svg>                | LightPink       | #FFB6C1 |
| <svg width="180" height="24"><rect width="180" height="24" fill="HotPink" /></svg>                  | HotPink         | #FF69B4 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DeepPink" /></svg>                 | DeepPink        | #FF1493 |
| <svg width="180" height="24"><rect width="180" height="24" fill="PaleVioletRed" /></svg>            | PaleVioletRed   | #DB7093 |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumVioletRed" /></svg>          | MediumVioletRed | #C71585 |

#### Purple

| Color                                                                                      | Name            | Hex     |
| ------------------------------------------------------------------------------------------ | --------------- | ------- |
| <svg width="180" height="24"><rect width="180" height="24" fill="Lavender" /></svg>        | Lavender        | #E6E6FA |
| <svg width="180" height="24"><rect width="180" height="24" fill="Thistle" /></svg>         | Thistle         | #D8BFD8 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Plum" /></svg>            | Plum            | #DDA0DD |
| <svg width="180" height="24"><rect width="180" height="24" fill="Orchid" /></svg>          | Orchid          | #DA70D6 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Violet" /></svg>          | Violet          | #EE82EE |
| <svg width="180" height="24"><rect width="180" height="24" fill="Fuchsia" /></svg>         | Fuchsia/Magenta | #FF00FF |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumOrchid" /></svg>    | MediumOrchid    | #BA55D3 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkOrchid" /></svg>      | DarkOrchid      | #9932CC |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkViolet" /></svg>      | DarkViolet      | #9400D3 |
| <svg width="180" height="24"><rect width="180" height="24" fill="BlueViolet" /></svg>      | BlueViolet      | #8A2BE2 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkMagenta" /></svg>     | DarkMagenta     | #8B008B |
| <svg width="180" height="24"><rect width="180" height="24" fill="Purple" /></svg>          | Purple          | #800080 |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumPurple" /></svg>    | MediumPurple    | #9370DB |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumSlateBlue" /></svg> | MediumSlateBlue | #7B68EE |
| <svg width="180" height="24"><rect width="180" height="24" fill="SlateBlue" /></svg>       | SlateBlue       | #6A5ACD |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkSlateBlue" /></svg>   | DarkSlateBlue   | #483D8B |
| <svg width="180" height="24"><rect width="180" height="24" fill="RebeccaPurple" /></svg>   | RebeccaPurple   | #663399 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Indigo" /></svg>          | Indigo          | #4B0082 |

#### Red

| Color                                                                                  | Name        | Hex     |
| -------------------------------------------------------------------------------------- | ----------- | ------- |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightSalmon" /></svg> | LightSalmon | #FFA07A |
| <svg width="180" height="24"><rect width="180" height="24" fill="Salmon" /></svg>      | Salmon      | #FA8072 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkSalmon" /></svg>  | DarkSalmon  | #E9967A |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightCoral" /></svg>  | LightCoral  | #F08080 |
| <svg width="180" height="24"><rect width="180" height="24" fill="IndianRed" /></svg>   | IndianRed   | #CD5C5C |
| <svg width="180" height="24"><rect width="180" height="24" fill="Crimson" /></svg>     | Crimson     | #DC143C |
| <svg width="180" height="24"><rect width="180" height="24" fill="Red" /></svg>         | Red         | #FF0000 |
| <svg width="180" height="24"><rect width="180" height="24" fill="FireBrick" /></svg>   | FireBrick   | #B22222 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkRed" /></svg>     | DarkRed     | #8B0000 |

#### Orange

| Color                                                                                 | Name       | Hex     |
| ------------------------------------------------------------------------------------- | ---------- | ------- |
| <svg width="180" height="24"><rect width="180" height="24" fill="Orange" /></svg>     | Orange     | #FFA500 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkOrange" /></svg> | DarkOrange | #FF8C00 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Coral" /></svg>      | Coral      | #FF7F50 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Tomato" /></svg>     | Tomato     | #FF6347 |
| <svg width="180" height="24"><rect width="180" height="24" fill="OrangeRed" /></svg>  | OrangeRed  | #FF4500 |

#### Yellow

| Color                                                                                           | Name                 | Hex     |
| ----------------------------------------------------------------------------------------------- | -------------------- | ------- |
| <svg width="180" height="24"><rect width="180" height="24" fill="Gold" /></svg>                 | Gold                 | #FFD700 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Yellow" /></svg>               | Yellow               | #FFFF00 |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightYellow" /></svg>          | LightYellow          | #FFFFE0 |
| <svg width="180" height="24"><rect width="180" height="24" fill="LemonChiffon" /></svg>         | LemonChiffon         | #FFFACD |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightGoldenRodYellow" /></svg> | LightGoldenRodYellow | #FAFAD2 |
| <svg width="180" height="24"><rect width="180" height="24" fill="PapayaWhip" /></svg>           | PapayaWhip           | #FFEFD5 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Moccasin" /></svg>             | Moccasin             | #FFE4B5 |
| <svg width="180" height="24"><rect width="180" height="24" fill="PeachPuff" /></svg>            | PeachPuff            | #FFDAB9 |
| <svg width="180" height="24"><rect width="180" height="24" fill="PaleGoldenRod" /></svg>        | PaleGoldenRod        | #EEE8AA |
| <svg width="180" height="24"><rect width="180" height="24" fill="Khaki" /></svg>                | Khaki                | #F0E68C |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkKhaki" /></svg>            | DarkKhaki            | #BDB76B |

#### Green

| Color                                                                                        | Name              | Hex     |
| -------------------------------------------------------------------------------------------- | ----------------- | ------- |
| <svg width="180" height="24"><rect width="180" height="24" fill="GreenYellow" /></svg>       | GreenYellow       | #ADFF2F |
| <svg width="180" height="24"><rect width="180" height="24" fill="Chartreuse" /></svg>        | Chartreuse        | #7FFF00 |
| <svg width="180" height="24"><rect width="180" height="24" fill="LawnGreen" /></svg>         | LawnGreen         | #7CFC00 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Lime" /></svg>              | Lime              | #00FF00 |
| <svg width="180" height="24"><rect width="180" height="24" fill="LimeGreen" /></svg>         | LimeGreen         | #32CD32 |
| <svg width="180" height="24"><rect width="180" height="24" fill="PaleGreen" /></svg>         | PaleGreen         | #98FB98 |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightGreen" /></svg>        | LightGreen        | #90EE90 |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumSpringGreen" /></svg> | MediumSpringGreen | #00FA9A |
| <svg width="180" height="24"><rect width="180" height="24" fill="SpringGreen" /></svg>       | SpringGreen       | #00FF7F |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumSeaGreen" /></svg>    | MediumSeaGreen    | #3CB371 |
| <svg width="180" height="24"><rect width="180" height="24" fill="SeaGreen" /></svg>          | SeaGreen          | #2E8B57 |
| <svg width="180" height="24"><rect width="180" height="24" fill="ForestGreen" /></svg>       | ForestGreen       | #228B22 |
| <svg width="180" height="24"><rect width="180" height="24" fill="Green" /></svg>             | Green             | #008000 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkGreen" /></svg>         | DarkGreen         | #006400 |
| <svg width="180" height="24"><rect width="180" height="24" fill="YellowGreen" /></svg>       | YellowGreen       | #9ACD32 |
| <svg width="180" height="24"><rect width="180" height="24" fill="OliveDrab" /></svg>         | OliveDrab         | #6B8E23 |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkOliveGreen" /></svg>    | DarkOliveGreen    | #556B2F |
| <svg width="180" height="24"><rect width="180" height="24" fill="MediumAquaMarine" /></svg>  | MediumAquaMarine  | #66CDAA |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkSeaGreen" /></svg>      | DarkSeaGreen      | #8FBC8F |
| <svg width="180" height="24"><rect width="180" height="24" fill="LightSeaGreen" /></svg>     | LightSeaGreen     | #20B2AA |
| <svg width="180" height="24"><rect width="180" height="24" fill="DarkCyan" /></svg>          | DarkCyan          | #008B8B |
| <svg width="180" height="24"><rect width="180" height="24" fill="Teal" /></svg>              | Teal              | #008080 |
