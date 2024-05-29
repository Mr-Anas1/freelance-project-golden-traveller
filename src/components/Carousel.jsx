import React from 'react';

function Carousel() {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src="https://alfifa.com/wp-content/uploads/2014/05/header02.jpg"
							class="d-block w-100"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://img.freepik.com/free-photo/young-man-beach-by-sea-generative-ai_169016-29381.jpg?t=st=1716921841~exp=1716925441~hmac=2ed350da8637feb0d7f40eb60b2fd8f4ddb6428297dd1ef69bc440002b8acd9e&w=1380"
							class="d-block w-100"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://img.freepik.com/free-photo/young-man-beach-by-sea-generative-ai_169016-29381.jpg?t=st=1716921841~exp=1716925441~hmac=2ed350da8637feb0d7f40eb60b2fd8f4ddb6428297dd1ef69bc440002b8acd9e&w=1380"
							class="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default Carousel;
