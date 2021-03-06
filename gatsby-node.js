/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blogPost.js');
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								node {
									frontmatter {
										path
                                        title
									}
								}
							}
						}
					}
				`
			).then(result => {
				const posts = result.data.allMarkdownRemark.edges;

				posts.forEach(({ node }) => {
					const path = node.frontmatter.path;
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							pathSlug: path
						}
					});
					resolve();
				});
			})
		);
	});
};