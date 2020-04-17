import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import Header from '../components/header'
import Menu from '../components/menu'
import '../styles/custom.scss'

const Template = ({ data }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
    const html = data.markdownRemark.html;
    const featuredImg = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<div>
			<Header />

			<Menu />

			<main>
				<section className="m-blog-section purple-bg">
					<div className="m-blog-wrapper m-shadow">
						<article className="m-featured">
							<div className="m-featured-img">
								<Img fluid={featuredImg} />
							</div>

							<h2>{title}</h2>
							<p>{date}</p>
							<div dangerouslySetInnerHTML={{ __html: html }} />
						</article>
					</div>
            	</section>
			</main>
		</div>
		
	);
};

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY", locale: "it" )
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
`;

export default Template;