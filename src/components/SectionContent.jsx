import SectionButton from "./SectionButton";

const SectionContent = ({ title, description }) => {
	const isTransformInHeading = title.includes("Transform");

	return (
		<div className="w-1/2 flex items-center justify-center px-30 py-34 section-content-media-600px">
			<div className="flex flex-col justify-center section-content">
				<h2 className="text-neutral-950 font-black text-4xl text-shadow-2xs mb-8">
					{title}
				</h2>
				<p className="text-gray-500 font-semibold text-lg mb-4">
					{description}
				</p>

				<SectionButton
					className={`${
						isTransformInHeading ? "yellow-border" : "red-border"
					} `}
				/>
			</div>
		</div>
	);
};

export default SectionContent;
