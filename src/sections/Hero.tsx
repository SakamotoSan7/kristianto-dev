import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { words } from '../constants';

function Hero() {
	return (
		<section
			id='hero'
			className='overflow-hidden relative'
		>
			<div className='top-0 left-0 z-10 absolute'>
				<img
					src='/images/bg.png'
					alt='background'
				/>
			</div>

			<div className='hero-layout'>
				{/* Hero Content */}
				<header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
					<div className='flex flex-col gap-7'>
						<div className='hero-text'>
							<h1>
								Shaping{' '}
								<span className='slide'>
									<span className='wrapper'>
										{words.map((word) => (
											<span
												key={word.text}
												className='flex items-center gap-1 md:gap-3 pb-2'
											>
												<img
													src={word.imgPath}
													alt={word.text}
													className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
												/>
												<span>{word.text}</span>
											</span>
										))}
									</span>
								</span>
							</h1>
							<h1>into Real Project</h1>
							<h1>that Deliver Results</h1>
						</div>
						<p className='text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl'>
							Hi, I'm Kris, a developer based in Indonesia with a
							passion for creating things that make people's lives
							a whole lot easier.
						</p>
						<Button
							className='md:w-80 md:h-16 w-60 h-12'
							id='button'
							text='See my Work'
						/>
					</div>
				</header>

				{/* 3D Model */}
				<figure>
					<div className='hero-3d-layout'>
						<HeroExperience />
					</div>
				</figure>
			</div>
		</section>
	);
}

export default Hero;
