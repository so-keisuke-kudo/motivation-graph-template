# モチベーションマップテンプレート

## 初回起動

```bash
$ npm i && npm run initalize
# or
$ yarn && yarn initialize
```

## グラフデータ

`source/chart.json` の値を変更することで反映されます｡
    
### `labels`

`0 ~ 現在の年齢` を記入してください｡  
上記値の生成コマンドを用意しています｡  

```bash
$ node commands/range 20
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
```

### `datasets > data`

年齢と同数のモチベーションパーセンテージを記入してください｡  
値は `100 ~ -100` までを想定しています｡  

### `borderColor/backgroundColor`


CSS の `border-color` または `background-color` で有効な値を入力してください｡  

### `borderWidth`

1以上の整数を入力してください｡  
