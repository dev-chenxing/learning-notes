---
layout: post
title: "Beautiful Python Terminal Styling with Rich"
date:   2024-04-19
permalink: "Rich"
---

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