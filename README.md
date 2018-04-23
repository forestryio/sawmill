![](axe.jpg)

*This lumberjack is tired. Check back later for more info.*

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
