import NavButton from "./NavButton";

const NavLinks = ({ className = "" }) => {
	return (
		<ul className={`flex items-center gap-12 text-lg ${className}`}>
			<li>
				<a
					href="#"
					className="transition-colors duration-300 hover:text-green-700 active:text-green-700"
				>
					About
				</a>
			</li>
			<li>
				<a
					href="#"
					className="transition-colors duration-300 hover:text-green-700 active:text-green-700"
				>
					Services
				</a>
			</li>
			<li>
				<a
					href="#"
					className="transition-colors duration-300 hover:text-green-700 active:text-green-700"
				>
					Projects
				</a>
			</li>
			<li>
				<NavButton />
			</li>
		</ul>
	);
};

export default NavLinks;
