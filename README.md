![](axe.jpg)

# Sawmill: A Modular Layout Builder for Hugo and Forestry.io

[Read the announcement post on Forestry.io](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#/)

## Installation

### 1. Add this theme as a submodule:

```bash
git submodule add https://github.com/dwalkr/sawmill.git themes/sawmill
```


### 2. Update your site's `config.toml` to use the theme:

```toml
theme = "sawmill"
```

### 3. *To use with [Forestry.io](https://forestry.io):* copy the `.forestry/` configuration to your project root:

```bash
cp -r themes/sawmill/.forestry .forestry
```

### Updating the theme

If you have Sawmill installed as a submodule, you can update it with the following command:

```bash
git submodule update --remote --merge
```

### License

This theme is released under the MIT license. For more information read the [License](https://github.com/dwalkr/sawmill/blob/master/LICENSE.md).

## Theme Development

This theme uses Webpack to compile assets.

After cloning the theme, run `npm install` to install the necessary dependencies. Run `npm run watch` to watch and live-compile assets, and run `npm run prod` to build production assets. Assets should be compiled for production and committed to repo when committing css/js updates.

Source files are located in the `assets` folder and compiled to the `static` folder.

### Brand Color

When writing styles that utilize the customizable brand color, add them to `layouts/partials/brand_css.html` instead of to the `.scss` files. Since the brand color should be customizable without having to directly modify the theme or re-run the build scripts, the relevant styles are embedded in the html document to take advantage of settings saved in the site's `config.toml`.