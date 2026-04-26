# initialize-css

Initialize CSS は邪魔になりそうなスタイルを無くすための リセットCSS でも、ブラウザ間の差異を無くすだけの ノーマライズCSS でもありません。セマンティックな HTML が読みやすくなるよう初期化します。

[https://nov-jp.github.io/initialize-css/](https://nov-jp.github.io/initialize-css/)

## 特徴

* ブラウザ間の差異を無くします。
* 各要素に初期スタイルを設定します。
* カスタムプロパティによるデザイントークンが設定されています。
* 初期スタイルにデザイン性を追加する initialize-plus.css もあります。

## 使い方

HTMLの`head`要素内で読み込みます。

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/initialize-css@main/initialize.min.css" />
```

必要に応じてカスタムプロパティを上書きする initialize-vars.css を作成し、

```CSS
:root {
	--red: #f00;
	--yellow: #ff0;
	--green: #0f0;
	--blue: #00f;
}
```

そのファイルを読み込みます。

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/initialize-css@main/initialize.min.css" />
<link rel="stylesheet" href="path/to/initialize-vars.css" />
```

デザイン性が必要ならプラスも読み込み、

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/initialize-css@main/initialize.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/initialize-css@main/initialize-plus.min.css" />
<link rel="stylesheet" href="path/to/initialize-vars.css" />
```

各要素に適宜クラスを追加してください。

```HTML
<hr class="__hr__" />
<pre class="__pre__"> … </pre>
<blockquote class="__blockquote__"> … </blockquote>
<figure class="__figure__"> … </figure>
<details class="__details__"> … </details>
<div class="__div-table__"><table> … </table></div>
<div class="__div-tabs__"> … </div>
<div class="__div-carousel__"> … </div>
```

要素によってはstyle属性とカスタムプロパティでカスタマイズできます。

```HTML
<div class="__div-table__" style="--border-width--: var(--sp_f); --border-color--: var(--gray);">
	<table style="--inline-size--: 60rem; --table-layout--: fixed;"> … </table>
</div>
```

詳細は各CSSファイルを覗いてみてください。

## ライセンス

MIT License
