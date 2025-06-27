const GalleryCard = ({ imgSrc, imgAlt }) => {
	return (
		<div className="section-gallery-media-1000px">
			<img src={imgSrc} alt={imgAlt} />
		</div>
	);
};

export default GalleryCard;
