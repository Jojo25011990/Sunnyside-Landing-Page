const NavToggleButtons = ({ isActive, toggleButton }) => {
	return (
		<div className="w-6 h-6 relative hidden toggle-nav-buttons">
			<button
				className={`absolute cursor-pointer ${
					isActive ? "hidden" : "block"
				}`}
				onClick={toggleButton}
			>
				<img
					src="./images/icon-hamburger.svg"
					alt="Hamburger Icon SVG"
				/>
			</button>

			<button
				className={`absolute cursor-pointer ${
					isActive ? "block" : "hidden"
				}`}
				onClick={toggleButton}
			>
				<img src="./images/icon-close.svg" alt="Close Icon SVG" />
			</button>
		</div>
	);
};

export default NavToggleButtons;
