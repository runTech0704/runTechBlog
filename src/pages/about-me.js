import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMePage = () => (
    <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <img src="/runtech-favicon.png" alt="プロフィール画像" class="profile-image" />
    <h2>👋 はじめまして</h2>
    <p>るんるんと申します。このブログへようこそ！</p>
    <p>私は、現在自社開発系のエンジニアをやっています。新卒2年目です。</p>

    <h2>🎯 私について</h2>

    <h3>経歴</h3>
    <ul>
        <li>文系の大学出身</li>
        <li>大学のプログラミングの授業で楽しさを知って、独学で Web 開発を勉強</li>
        <li>その後現在の会社に至る</li>
    </ul>

    <h3>専門分野・得意分野</h3>
    <ul>
        <li>Python, Django</li>
        <li>Google Cloud Platform</li>
        <dl>App Engine</dl>
        <dl>Cloud Run</dl>
        <dl>Firestore</dl>
        <dl>Cloud Build</dl>
        <dl>AlloyDB</dl>
        <dl>Artifact Registry</dl>
        <dl>Shared-VPC</dl>
        <li>GCP 認定資格</li>
        <dl>Associate Cloud Engineer</dl>
        <dl>Professional Cloud Developer</dl>
    </ul>

    <h2>💡 このブログについて</h2>
    <p>日々のアウトプットが、誰かの役に立つ</p>

    <h3>主な投稿テーマ</h3>
    <ul>
        <li>テック系</li>
        <li>思考方法</li>
        <li>自分の心情吐露</li>
    </ul>

    <h2>📫 コンタクト</h2>
    <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://x.com/runrun071719842">X</a>
        <a href="mailto:satoru0704.f@gmail.com">Email</a>
    </div>

    <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link to="/">ホームに戻る</Link>
    </div>

    </Layout>
)

export default AboutMePage
