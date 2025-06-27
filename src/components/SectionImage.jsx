const SectionImage = ({ imgSrc }) => {
	return (
		<div
			style={{ backgroundImage: `url(${imgSrc})` }}
			className="content-bg-img w-1/2"
		></div>
	);
};

export default SectionImage;
