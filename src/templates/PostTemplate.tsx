import React from 'react';
import Layout from '../components/layout';
import Utterances from '../lib/Utterances';
import {graphql, useStaticQuery} from 'gatsby';
import SEO from '../components/seo';

const PostTemplate: React.FC = React.memo((props: any) => {
	const { title, date, html } = props.pageContext;

	const data = useStaticQuery(graphql`
    query GetRepoQuery {
      site {
        siteMetadata {
          repo
        }
      }
    }
  `);

	return (
		<Layout>
			<>
        <SEO title={title} />
				<h2>{title}</h2>
				<h4>{date}</h4>
				<hr />
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<Utterances repo={data.site.siteMetadata.repo} />
			</>
		</Layout>
	);
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
