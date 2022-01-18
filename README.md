Better UI for the compendium packs tab. Clearer and more compact.

# Screenshots

Normal compendium packs tab without this module | Compendium packs tab with this module
:---:|:---:
![Normal compendium packs tab without this module](./examples/compendium%20packs%20tab%20-%20normal.png) | ![Compendium packs tab with this module](./examples/compendium%20packs%20tab%20-%20with%20compact-compendium-list.png)

# Why not only CSS?

This module could almost be without JS and be CSS only but, sadly, it's needed because the "lines" in the compendium tab have no CSS class (or attribute) saying what their type is. The only way to detect that is to use the title of the category which can't be done in CSS. So JS is used to detecte those category titles and add a appropriate CSS class that the CSS file can use after.

# Compatibility

Compatible with version 2.4.1 of [vtt-compendium-folders](https://github.com/earlSt1/vtt-compendium-folders), others version are probably compatible but I haven't tested them.