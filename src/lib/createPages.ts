import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export const createPages = async ({ actions, graphql }: CreatePagesArgs) => {
	const { createPage } = actions;

	const { data, errors } = await graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            html
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `);

	if (errors) {
		throw errors;
	}

	// @ts-ignore
	data.allMarkdownRemark.edges.forEach(({ node }: any) => {
		createPage({
			path: node.frontmatter.title,
			context: {
				html: node.html,
				title: node.frontmatter.title,
			},
			component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
		});
	});
};
