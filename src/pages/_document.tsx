import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class CarterDocument extends Document {
	public render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="icon" type="image/png" href="https://avatars1.githubusercontent.com/u/45381083" />
					<meta name="theme-color" content="#000000" />
					<meta name="description" content="Carter Himmel, Software Engineer and Coffee Snob" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<Script
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "hikewdkjc0");
						`,
						}}
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
