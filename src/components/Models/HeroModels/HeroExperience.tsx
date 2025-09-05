import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import { MagicRoom } from './MagicRoom';
import Particles from './Particles';

const HeroExperience = () => {
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
	return (
		<Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
			<HeroLights />

			<Particles count={100} />

			<OrbitControls
				enablePan={false}
				enableDamping={true}
				dampingFactor={0.05}
				enableZoom={isMobile ? true : false}
				maxDistance={20}
				minDistance={5}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 6}
				minAzimuthAngle={-Math.PI / 4}
				maxAzimuthAngle={Math.PI / 4}
			/>
			<group
				scale={isMobile ? 0.018 : isTablet ? 0.035 : 0.042}
				position={isMobile ? [0, -2, 0] : [0, -3, 0]}
				rotation={[0, -Math.PI / 4, 0]}
			>
				<MagicRoom />
			</group>
		</Canvas>
	);
};

export default HeroExperience;
