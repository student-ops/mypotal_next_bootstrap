# My Portfolio Site

stundet-ops のポートフォリオサイトです。
Next.js で作成し、静的ビルドしたものを AWS から配信しています。

[here](https://cloud-crab.com)

### ポイント

- CD を実装して、自動でビルドされた静的ファイルと AWS のストレージを同期
- レスポンシブにも対応した UI となっています。Next.js で簡易的に実装しました。
- ビルドを高速化するため CD ワークフローで bun を使用
- AWS を使用しており、インフラはすべて Terraform でコード化済み
