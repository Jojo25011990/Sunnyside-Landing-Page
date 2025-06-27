const TestimonialCard = ({ imgSrc, description, title, subTitle }) => {
	return (
		<div className="testimonial-card">
			<div className="mb-14">
				<img src={imgSrc} alt={title} />
			</div>

			<p className="mb-16">{description}</p>

			<h4 className="mt-1.5"> {title}</h4>
			<small> {subTitle}</small>
		</div>
	);
};

export default TestimonialCard;
