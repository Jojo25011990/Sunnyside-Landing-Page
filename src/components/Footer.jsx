import Navigation from "./Navigation";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center items-center px-10 py-20">
			<div className="w-full max-w-72 flex flex-col justify-center items-center gap-20">
				<nav className="flex flex-col items-center justify-center gap-10">
					<Navigation footerOrHeader={"footer"} />
				</nav>
				<nav>
					<ul className="flex gap-6">
						<li>
							<a
								href="#"
								className="text-xl duration-300 transition-colors"
							>
								<i className="fa-brands fa-square-facebook"></i>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-xl duration-300 transition-colors"
							>
								<i className="fa-brands fa-instagram"></i>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-xl duration-300 transition-colors"
							>
								<i className="fa-brands fa-twitter"></i>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-xl duration-300 transition-colors"
							>
								<i className="fa-brands fa-pinterest"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
