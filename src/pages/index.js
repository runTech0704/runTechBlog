import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/blog-index.css' // 新しいスタイルをインポート

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />

      {/* Blog Index のタイトル */}
      <div className="container">
        <h1>Blog Index</h1>
        <ol style={{ listStyle: `none`, padding: 0 }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug} className="blog-list-item">
                <article
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
      {/* お問い合わせセクション */}
      <div className="container">
        <h1>Contact Form</h1>
        <form action="/" name="contact" method="POST" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name <input type="text" name="name" placeholder="お名前を入力してください" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" placeholder="アドレスを入力してください" /></label>
          </p>
          <p>
            <label>Content</label>
            <textarea name="content" rows="4" cols="50" placeholder="お問い合わせ内容を入力してください..."></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
