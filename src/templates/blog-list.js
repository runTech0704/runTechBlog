import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../pages/styles/blog-index.css'

const BlogList = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

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

        {/* ページネーション */}
        <nav className="pagination">
          <div className="pagination-links">
            {!isFirst && (
              <Link to={prevPage} rel="prev" className="pagination-link">
                ← Previous
              </Link>
            )}
            <span className="pagination-info">
              Page {currentPage} of {numPages}
            </span>
            {!isLast && (
              <Link to={nextPage} rel="next" className="pagination-link">
                Next →
              </Link>
            )}
          </div>
        </nav>
      </div>

      {/* お問い合わせセクション */}
      <div className="container">
        <h1>Contact Form</h1>
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
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

export default BlogList

export const Head = ({ pageContext }) => {
  const { currentPage } = pageContext
  const title = currentPage === 1 ? "All posts" : `All posts - Page ${currentPage}`
  return <Seo title={title} />
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
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
