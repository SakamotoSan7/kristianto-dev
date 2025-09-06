import { socialImgs } from '../constants';

const Footer = () => {
	return (
		<footer className='footer md:mb-16 mb-20'>
			<div className='footer-container'>
				<div className='flex flex-col md:items-start items-center md:mt-3 mt-8'>
					<a
						href='mailto:inikristiantoitu@gmail.com'
						className='text-white hover:underline '
					>
						inikristiantoitu@gmail.com
					</a>
				</div>

				<div className='socials'>
					{socialImgs.map((socialImg) => (
						<a
							key={socialImg.url}
							className='icon'
							href={socialImg.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={socialImg.imgPath}
								alt='social icon'
							/>
						</a>
					))}
				</div>
				<div className='flex flex-col justify-center'>
					<p className='text-center md:text-end cursor-default'>
						© {new Date().getFullYear()} Kristianto. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
