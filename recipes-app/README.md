# recipes-app memo

[サンプルURL](https://github.com/oreilly-japan/learning-react-2e-ja/blob/master/chapter-05/5.3/recipes-app/package.json)

## プロジェクト構成

```
recipes-app % tree -I node_modules
.
├── README.md
├── data
│    └── recipes.json
├── package-lock.json
├── package.json
└── src
    ├── components
    │    ├── Ingredient.js
    │    ├── IngredientsList.js
    │    ├── Instructions.js
    │    ├── Menu.css
    │    ├── Menu.js
    │    └── Recipe.js
    └── index.js

3 directories, 11 files

```

## ライブラリ

```
recipes-app
├── react-dom@17.0.2
├── react@17.0.2
├── serve@13.0.2
├── webpack-cli@4.9.1
└── webpack@5.64.0
```