const SectionContentImgBox = ({ title, description, imgSrc }) => {
	return (
		<div
			className="content-bg-img w-1/2 pb-14 flex justify-center items-end"
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<div className="content-graph-photo sectionContentImg-media-400px">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SectionContentImgBox;
