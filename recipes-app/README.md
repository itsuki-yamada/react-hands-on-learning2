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

- react
- react-dom
- serve