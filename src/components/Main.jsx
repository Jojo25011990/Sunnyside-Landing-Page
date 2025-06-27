import GalleryCard from "./GalleryCard";
import SectionContent from "./SectionContent";
import SectionContentImgBox from "./SectionContentImgBox";
import SectionImage from "./SectionImage";
import TestimonialCard from "./TestimonialCard";

const Main = () => {
	return (
		<main className="w-full relative  bg-white">
			{/* Section Brand */}
			<section className="flex items-center justify-center">
				<SectionContent
					title={"Transform your brand"}
					description={
						"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
					}
				/>

				<SectionImage imgSrc={"./images/desktop/image-transform.jpg"} />
			</section>
			{/* End of Section Brand */}

			{/* Section Audience */}
			<section className="flex items-center justify-center">
				<SectionImage imgSrc={"./images/desktop/image-stand-out.jpg"} />

				<SectionContent
					title={"Stand out to the right audience"}
					description={
						"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
					}
				/>
			</section>
			{/* End of Section Audience */}

			{/* Section Design & Photography */}
			<section className="flex items-center justify-center">
				<SectionContentImgBox
					imgSrc={"./images/desktop/image-graphic-design.jpg"}
					title={"Graphic Design"}
					description={
						"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potencional clients attention."
					}
				/>

				<SectionContentImgBox
					imgSrc={"./images/desktop/image-photography.jpg"}
					title={"Photography"}
					description={
						"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
					}
				/>
			</section>
			{/* End of Section Design & Photography */}

			{/* Section Testimonials */}
			<section className="flex items-center justify-center px-10 py-40">
				<div className="container-1110px min-h-96">
					<h3 className="uppercase text-gray-400 font-black text-xl tracking-wide mb-20 text-center">
						client testimonials
					</h3>

					<div className="container-1110px flex items-center gap-8 testimonial-card-media-1070px">
						<TestimonialCard
							imgSrc={"./images/image-emily.jpg"}
							description={
								"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
							}
							title={"Emily R."}
							subTitle={"Marketing Director"}
						/>

						<TestimonialCard
							imgSrc={"./images/image-thomas.jpg"}
							description={
								"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
							}
							title={"Thomas S."}
							subTitle={"Chief Operating Officer"}
						/>

						<TestimonialCard
							imgSrc={"./images/image-jennie.jpg"}
							description={
								"Incredible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
							}
							title={"Jennie F."}
							subTitle={"Business Owner"}
						/>
					</div>
				</div>
			</section>
			{/* End of Section Testimonials */}

			{/* Section Gallary Photos */}
			<section className="flex items-center justify-center section-gallery-wrapper-media-1000px">
				{/* img */}
				<GalleryCard
					imgSrc={"./images/desktop/image-gallery-milkbottles.jpg"}
					imgAlt={"Three milk bottles"}
				/>
				<GalleryCard
					imgSrc={"./images/desktop/image-gallery-orange.jpg"}
					imgAlt={"One orange"}
				/>
				<GalleryCard
					imgSrc={"./images/desktop/image-gallery-cone.jpg"}
					imgAlt={"One cone"}
				/>
				<GalleryCard
					imgSrc={"./images/desktop/image-gallery-sugarcubes.jpg"}
					imgAlt={"Many sugar cubes"}
				/>
			</section>
			{/* End of Section Gallary Photos */}
		</main>
	);
};

export default Main;
