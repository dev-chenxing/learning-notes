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

Date: 2024/4/16

### Backup BIOS and Roms

The BIOS files from the stock operating system are located in `\RetroArch\.retroarch\system`. The Rom files are located in `\Roms`.

### Install OnionOS

Download [Onion Desktop Tools](https://github.com/schmurtzm/Onion-Desktop-Tools/blob/main/README.md) and run the `_Onion Desktop Tools - Launcher.bat` to **format SD card in FAT32 and install Onion**.

Once it's done, eject the SD card from our computer. Plug it into the Miyoo Mini Plus and power it on. The installation process will begin automatically. 

### Package Manager

After the installation is complete, install emulators and apps in the package manager:

- NEC - TurboGrafx-16
- Nintendo - GBA
- Nintendo - Game Boy Color
- Nintendo - NES
- Nintendo - SNES
- Sega - Genesis
- Sega - Master System

Press START to install. Then shut down the device, eject the SD card, and put it back into the computer.

### Install BIOS

Move the following BIOS files to the `\BIOS` folder:

- SEGA CD: `bios_CD_E.bin`, `bios_CD_J.bin`, `bios_CD_U.bin`
- Game Boy: `gb_bios.bin`
- Game Boy Advance: `gba_bios.bin`
- Game Boy Color: `gbc_bios.bin`
- Neo Geo: `neogeo.zip` (Keep it in both the `/BIOS` folder and the `/Roms/NEOGEO` folder to ensure best compatibility)
- PlayStation: `scph5501.bin`
- PC Engine: `syscard1.pce`, `syscard2.pce`, `syscard3.pce`

### Install Roms

Move the ROM files to the subfolders within the `\Roms` folder:

- Arcade: `ARCADE`
- NES: `FC`
- Game Boy: `GB`
- Game Boy Advance: `GBA`
- Game Boy Color: `GBC`
- Sega Genesis: `MD`
- Sega - Master System: `MS`
- Neo Geo: `NEOGEO`
- TurboGrafx-16: `PCE`
- PlayStation: `PS`
- SNES: `SFC`

More information please check the [Onion Docs](https://onionui.github.io/docs/emulators/nes)!