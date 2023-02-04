import React from "react";

export const Footer = function () {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>Copyright © {currentYear}</p>
		</footer>
	);
};
