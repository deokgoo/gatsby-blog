import React from 'react';
import Layout from '../components/layout';
import Utterances from '../lib/Utterances';

const PostTemplate: React.FC = React.memo((props: any) => {
	const { title, date, html } = props.pageContext;
	return (
		<Layout>
			<h2>{title}</h2>
			<h4>{date}</h4>
			<hr />
			<div dangerouslySetInnerHTML={{ __html: html }} />
			<Utterances repo="deokgoo/gatsby-blog" />
		</Layout>
	);
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
