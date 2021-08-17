import React from 'react'
import { Helmet } from 'react-helmet'
import Base from '../layouts/base.jsx'

function Home() {
	return (
		<Base>
			<main className="text-white h-full w-full grid items-center justify-center overflow-hidden">
				<Helmet>
					<title>Ravens Gaming™</title>
				</Helmet>
				<div className="absolute inset-0 h-full w-full flex items-center justify-center">
					<div className="animate-pulse h-96 w-96 transform translate border-2 border-purple-700 border-opacity-50 rounded-full"></div>
				</div>
				<section className="text-center">
					<h1 className="text-6xl font-bold tracking-wide mb-4">Ravens Gaming</h1>
					<h2 className="text-sm text-purple-700 opacity-90 text-bold tracking-widest uppercase">
						Coming Soon
					</h2>
				</section>
			</main>
		</Base>
	);
}

export default Home;
