import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const withEmailjs = (WrappedComponent) => {
	const EnhancedComponent = (props) => {
		const [loading, setLoading] = useState(false);

		const handleSubmit = () => {
			const email = window.prompt("Please enter your email address");
			if (email !== null) {
				const name = window.prompt("Please enter your Name");
				setLoading(true);
				emailjs
					.send(
						process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
						process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
						{
							from_name: name,
							to_name: "Srabon Barua",
							from_email: email,
							to_email: "et.srabon@gmail.com",
						},
						process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
					)
					.then(
						() => {
							setLoading(false);
							alert("Thank you. I will get back to you as soon as possible.");
						},
						(error) => {
							setLoading(false);
							console.error(error);
							alert("Ahh, something went wrong. Please try again.");
						}
					);
			}
		};

		return (
			<WrappedComponent
				{...props}
				loading={loading}
				handleSubmit={handleSubmit}
			/>
		);
	};

	return EnhancedComponent;
};

export default withEmailjs;
