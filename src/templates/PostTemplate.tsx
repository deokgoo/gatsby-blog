import React from 'react';
import Layout from '../components/layout';

const PostTemplate: React.FC = React.memo((props: any) => {
	return (
		<Layout>
			<code>
				<pre>{JSON.stringify(props, null, 4)}</pre>
			</code>
		</Layout>
	);
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
