import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="プライバシーポリシー" />
    <h1>プライバシーポリシー</h1>
    <p>ここにプライバシーポリシーの内容を記載します。</p>

    <h2>1. 基本方針</h2>
    <p>当ブログでは、訪問者の皆様のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当ブログでの個人情報の収集・利用・管理について説明いたします。</p>

    <h2>2. 収集する情報</h2>
    <p>当ブログでは以下の情報を収集する場合があります：</p>

    <h4>2.1 自動的に収集される情報</h4>
    <ul>
        <li>IPアドレス</li>
        <li>ブラウザの種類</li>
        <li>デバイスの情報</li>
        <li>アクセス日時</li>
        <li>閲覧したページの情報</li>
        <li>リファラ情報</li>
    </ul>

    <h4>2.2 お問い合わせ時に収集される情報</h4>
    <ul>
        <li>お名前</li>
        <li>メールアドレス</li>
        <li>お問い合わせ内容</li>
    </ul>

    <h2>3. 情報の利用目的</h2>
    <p>収集した情報は、以下の目的で利用いたします：</p>
    <ul>
        <li>ブログの改善・運営</li>
        <li>お問い合わせへの対応</li>
        <li>アクセス分析</li>
        <li>コンテンツの最適化</li>
        <li>セキュリティの確保</li>
    </ul>

    <h2>4. Cookieの使用について</h2>
    <p>当ブログでは、ユーザーエクスペリエンスの向上のためにCookieを使用しています。Cookieは、ブラウザの設定により無効化することが可能です。</p>

    <h2>5. 第三者への提供</h2>
    <p>法令に基づく場合を除き、収集した個人情報を事前の同意なく第三者へ提供することはありません。</p>

    <h2>6. 個人情報の管理</h2>
    <p>収集した個人情報は、適切な安全管理措置を講じて管理いたします。</p>

    <h2>7. 開示・訂正・削除について</h2>
    <p>収集した個人情報について、開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。</p>

    <h2>8. プライバシーポリシーの変更</h2>
    <p>本プライバシーポリシーの内容は、法令の変更や必要に応じて、予告なく変更される場合があります。変更があった場合は、当ブログ上でお知らせいたします。</p>

    <h2>9. お問い合わせ先</h2>
    <p>本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：</p>
    <p>satoru0704.f@gmail.com</p>

    <p>最終更新日：2024/11/10</p>

    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <Link to="/">ホームに戻る</Link>
    </div>
  </Layout>
)

export default PrivacyPolicyPage