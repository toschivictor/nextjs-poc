import React, { useState, useEffect, useRef } from 'react';

interface Image {
	src: string;
	alt: string;
}

interface CarouselProps {
	images: Image[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const imageRef = useRef<HTMLDivElement>(null);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex + images.length - 1) % images.length
		);
	};

	useEffect(() => {
		const intervalId = setInterval(() => handleNext(), 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className="carousel flex overflow-hidden">
			<div className="carousel__images flex w-full transition duration-500 ease-in-out transform -translate-x-0">
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className={`carousel__image w-full object-cover ${
							index === activeIndex ? 'block' : 'hidden'
						}`}
					/>
				))}
			</div>
			<button
				type="button"
				aria-label="Previous image"
				className="carousel__button carousel__button--prev focus:outline-none bg-gray-200 hover:bg-gray-300 p-2 rounded-full absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2"
				onClick={handlePrev}
			>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<button
				type="button"
				aria-label="Next image"
				className="carousel__button carousel__button--next focus:outline-none bg-gray-200 hover:bg-gray-300 p-2 rounded-full absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2"
				onClick={handleNext}
			>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
};
