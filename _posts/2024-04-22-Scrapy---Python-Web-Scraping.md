---
layout: post
title: "Scrapy - Python Web Scraping"
date:   2024-04-22
permalink: "Scrapy"
---

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