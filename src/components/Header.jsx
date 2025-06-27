import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import NavToggleButtons from "./NavToggleButtons";
import NavLinks from "./NavLinks";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleNavButton = () => {
		setIsActive((changeButton) => !changeButton);
	};

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width > 800 && isActive) setIsActive(false);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [isActive]);

	const h1Ref = useRef();
	const container = useRef();

	useGSAP(
		() => {
			const spans = h1Ref.current.querySelectorAll("span");
			gsap.timeline()
				.from(
					spans,
					{
						autoAlpha: 0,
						y: 30,
						stagger: 0.05,
						duration: 0.4,
						delay: 0.5,
						ease: "power2.out",
					},
					">"
				)
				.to(
					spans,
					{
						autoAlpha: 0,
						y: -30,
						stagger: 0.05,
						duration: 0.4,
						ease: "power2.out",
					},
					">"
				)
				.to(spans, {
					autoAlpha: 1,
					y: 30,
					stagger: 0.05,
					duration: 0.4,
					ease: "power2.out",
				});
		},
		{ scope: container }
	);

	return (
		<header
			ref={container}
			className="w-full relative text-neutral-50 px-10 py-8"
		>
			<div className="container-1360px flex flex-col items-center gap-24">
				<nav className="w-full flex justify-between items-center gap-10">
					<Navigation className="navigation-media-800px" />

					<NavToggleButtons
						isActive={isActive}
						toggleButton={toggleNavButton}
					/>
				</nav>

				<nav
					className={`w-full max-w-mobile-navigation  relative -top-10 left-1/2 -translate-x-1/2 z-50   bg-transparent ${
						isActive ? "flex" : "hidden"
					}`}
				>
					<div className="absolute z-40 -top-9 right-0 bg-white mobile-navigation-triangle"></div>

					<NavLinks className={"mobile-navigation"} />

					<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
						<img
							src="./images/icon-arrow-down.svg"
							alt="White arrow down, icon SVG"
						/>
					</div>
				</nav>

				<div
					className={`w-fullnpm flex-col items-center gap-24 ${
						isActive ? "hidden" : "flex"
					}`}
				>
					<h1
						ref={h1Ref}
						className="uppercase font-black text-6xl tracking-wider"
					>
						<span>W</span>
						<span>e</span>
						<span>&nbsp;</span>
						<span>a</span>
						<span>r</span>
						<span>e</span>
						<span>&nbsp;</span>
						<div className="inline-block">
							<span>c</span>
							<span>r</span>
							<span>e</span>
							<span>a</span>
							<span>t</span>
							<span>i</span>
							<span>v</span>
							<span>e</span>
							<span>s</span>
						</div>
					</h1>
					<img
						src="./images/icon-arrow-down.svg"
						alt="White arrow down, icon SVG"
						className="bounce-header-arrow"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
