import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div class="m-blog-container purple-bg">
				{edges.map(edge => {
					const { frontmatter } = edge.node;
					return (
						<section className="m-blog-section" key={frontmatter.path}>
							<div className="m-blog-wrapper m-shadow">
								<article className="m-featured">
									<div className="m-featured-img">
										<Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
									</div>
									<div className="article-text">
										<h2>{frontmatter.title}</h2>
											<p className="subtitle yellow-text">
												<em> Pubblicato il</em> {frontmatter.date}
											</p>
										<p>{frontmatter.excerpt}</p>
										<Link to={frontmatter.path} className="m-main-button purple-bg">Continua</Link>
									</div>
								</article>
							</div>
						</section>
					);
				})}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
                        path
						excerpt
						featuredImage {
							childImageSharp {
							  fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							  }
							}
						  }
					}
				}
			}
		}
	}
`;

export default IndexPage;