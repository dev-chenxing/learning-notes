---
layout: post
title: "Miyoo Mini Plus Starter Guide"
date: 2024-04-16
permalink: "Miyoo"
---

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