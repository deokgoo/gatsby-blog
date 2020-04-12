import { Link } from 'gatsby';
import React from 'react';

const Header = (props: { siteTitle: string }) => {
	let {siteTitle} = props;
	return (
		<header style={{background: `rebeccapurple`, marginBottom: `1.45rem`}}>
			<div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: 'flex', flexDirection: 'row'}}>
				<h2 style={{margin: 0}}>
					<Link to="/" style={{color: `white`, textDecoration: `none`}}>
						{siteTitle}
					</Link>
				</h2>
				<h2 style={{margin: 0}}>
					<Link to="/" style={{color: `white`, textDecoration: `none`}}>
						{siteTitle}
					</Link>
				</h2>
				<h2 style={{margin: 0}}>
					<Link to="/" style={{color: `white`, textDecoration: `none`}}>
						{siteTitle}
					</Link>
				</h2>
			</div>
		</header>);
};

export default Header
