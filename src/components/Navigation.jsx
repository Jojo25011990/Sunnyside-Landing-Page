import NavLinks from "./NavLinks";

const Navigation = ({ footerOrHeader }) => {
	const logoSrc =
		footerOrHeader === "footer"
			? "./images/footer-logo.png"
			: "./images/logo.svg";

	return (
		<>
			<div>
				<img src={logoSrc} alt="Sunnyside Logo" />
			</div>

			<NavLinks className="navigation-media-800px" />
		</>
	);
};

export default Navigation;
