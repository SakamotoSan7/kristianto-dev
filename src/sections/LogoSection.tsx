import { logoIconsList } from '../constants';

const LogoIcon = ({ icon }) => {
	return (
		<div className='flex-none flex-center marquee-item'>
			<img
				src={icon.imgPath}
			/>
		</div>
	);
};

const LogoSection = () => {
	return (
		<div className='relative md:my-20 my-10'>
			<div className='gradient-edge' />
			<div className='gradient-edge' />

			<div className='marquee h-52'>
				<div className='marquee-box md:gap-12 gap-5'>
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
