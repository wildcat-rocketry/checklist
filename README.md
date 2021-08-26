# Wildcat Rocketry Checklist Repo

This repository contains a set of checklists of links used for various purposes by Wildcat Rocketry.
If you are looking for one of these lists, you should look at https://wildcat-rocketry.github.io/checklist/ instead of here.

## Modifying Checklists

Each checklist has a JavaScript file in it which contains the checklist data.
These JavaScript files have the checklist data in a JSON format.

At the top level, the `checklistItems` is an array of sections.
Each section has a `name` that is displayed in a header and a list of `items`, which is an array of items.
Each items has a `name` that is displayed in the link, and a `href` that is the target to the link.
Common types of items should have the same value of `target`, but the actual value of `target` itself does not matter.
Any items with the same `target` will use a single browser tab when opening them as not to open a million tabs when clicking on links.

## Creating Checklists

To create a new checklist, create a new folder in this repo.
The name of the folder will become the end of the URL to the checklist.

Create two files in the folder:

`index.html`:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My New Page | Wildcat Rocketry</title>
        <link rel="stylesheet" href="../checklist.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.purple-blue.min.css" />
    </head>
    <body>
        <script src="my-new-page.js"></script>
        <script src="../checklist.js"></script>
        <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    </body>
</html>
```

`my-new-page.js`:
```js
"use strict";

let checklistName = "my-new-page";
let checklistItems = [
    {
        "name": "First Section Header",
        "items": [
            {
                "name": "First Item",
                "href": "https://github.com/wildcat-rocketry",
                "target": "example"
            },
            {
                "name": "Another Item",
                "href": "https://github.com/wildcat-rocketry/checklist",
                "target": "example"
            }
        ]
    }
];
```

Make sure to replace `my-new-page` and `My New Page` with the actual folder name and page name.
The large structure in the JavaScript file should be modified as discussed in the previous section.

Also, make sure to update `index.js` to include a link to the new page.
