import { logoIconsList } from '../constants';

const LogoIcon = ({ icon }) => {
	return (
		<div className='flex-none flex-center marquee-item'>
			<img src={icon.imgPath} />
		</div>
	);
};

const LogoSection = () => {
	return (
		<div className='relative md:mb-23 md:mt-6 mb-12 mt-2'>
			<div className='gradient-edge' />
			<div className='gradient-edge' />

			<div className='marquee md:w-[125dvw] w-[105dvw] h-28'>
				<div className='marquee-box md:gap-6 gap-2'>
					{logoIconsList.map((icon) => {
						return <LogoIcon icon={icon} />;
					})}

					{logoIconsList.map((icon) => {
						return <LogoIcon icon={icon} />;
					})}

					{logoIconsList.map((icon) => {
						return <LogoIcon icon={icon} />;
					})}

					{logoIconsList.map((icon) => {
						return <LogoIcon icon={icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default LogoSection;
