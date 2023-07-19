import React from 'react'
import Head from 'next/head';
import AboutUs from './components/AboutUs/AboutUs';

const About = () => {
  return (
		<div>
			{" "}
			<Head>
				<title>Unicorniz | About</title>
				<meta name="keywords" content="about unicorniz" />
			</Head>
			<AboutUs />
		</div>
	);
}

export default About