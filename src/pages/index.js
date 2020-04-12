import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div>
				{edges.map(edge => {
					const { frontmatter } = edge.node;
					return (
						<section className="m-blog-section purple-bg" key={frontmatter.path}>
							<div className="m-blog-wrapper m-shadow">
								<article className="m-featured">
									<div className="m-featured-img">
										<p><Img fluid={frontmatter.featuredImage.childImageSharp.fluid} /></p>
										<h2><Link to={frontmatter.path}>{frontmatter.title}</Link></h2>
										&nbsp;
										<small>
											{' '}
											<em>published on</em> {frontmatter.date}
										</small>
										<p>{frontmatter.excerpt}</p>
										<br />
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
						date(formatString: "MMMM DD, YYYY")
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