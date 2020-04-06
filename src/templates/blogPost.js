import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

const Template = ({ data }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
    const html = data.markdownRemark.html;
    const featuredImg = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<div>
            <div>
            <Img fluid={featuredImg} />
            </div>
			<h1>{title}</h1>
            <p>{date}</p>
			<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
                excerpt
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
			}
		}
	}
`;

export default Template;