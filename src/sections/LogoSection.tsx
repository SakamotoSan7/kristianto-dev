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
		<div className='relative md:mb-25 md:mt-8 mb-15 mt-3'>
			<div className='gradient-edge' />
			<div className='gradient-edge' />

			<div className='marquee md:w-[131dvw] w-[114dvw] h-28'>
				<div className='marquee-box md:gap-4 gap-3'>
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
