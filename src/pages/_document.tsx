import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class CarterDocument extends Document {
	public render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="darkreader-lock" />
					<link rel="icon" type="image/png" href="https://avatars1.githubusercontent.com/u/45381083" />
					<meta name="theme-color" content="#000000" />
					<meta name="description" content="Carter Himmel, Software Engineer and Coffee Snob" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
