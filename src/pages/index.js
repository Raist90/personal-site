import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div class="m-blog-container purple-gradient">
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
									{frontmatter.tags.map((tag, i) => [
											<span className="badge badge-pill purple-bg" key={i}>
												{tag}
												{i < frontmatter.tags.length} 
										  	</span>
										])}
										<h2>{frontmatter.title}</h2>
										<p className="subtitle yellow-text">
											<em> Pubblicato il</em> {frontmatter.date}
										</p>
										<p>{frontmatter.excerpt}</p>
										<p><small>Tempo di lettura stimato: {edge.node.timeToRead} min.</small></p>
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
		allMarkdownRemark(limit: 4, sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
						path
						tags
						excerpt
						featuredImage {
							childImageSharp {
							  fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							  }
							}
						  }
					}
					timeToRead
				}
			}
		}
	}
`;

export default IndexPage;