import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Vinnie } from './Vinnie';
import { DragonRoom } from './DragonRoom';
import HeroLights from './HeroLights';
import { MagicRoom } from './MagicRoom';
import Particles from './Particles';

const HeroExperience = () => {
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	return (
		<Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
			<HeroLights />

			<Particles count={100} />

			<OrbitControls
				enablePan={false}
				enableDamping={true}
				dampingFactor={0.05}
				enableZoom={!isTablet}
				maxDistance={20}
				minDistance={5}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 6}
				minAzimuthAngle={-Math.PI / 4}
				maxAzimuthAngle={Math.PI / 4}
			/>
			<group
				// DragonRoom
				// scale={isMobile ? 3 : 4.5}
				// position={isMobile ? [-0.1, -3, 0] : [0, -3.8, 0]}
				// rotation={[0, -Math.PI / 4, 0]}

				// Vinnie
				// scale={isMobile ? 2.5 : 3}
				// position={isMobile ? [-0.1, -3, 0] : [0, -4, 0]}

				// MagicRoom
				scale={isMobile ? 3 : 0.046}
				position={isMobile ? [-0.1, -3, 0] : [0.5, -3.6, 0]}
				rotation={[0, -Math.PI / 4, 0]}
			>
				{/* <Vinnie /> */}
				{/* <DragonRoom /> */}
				<MagicRoom />
			</group>
		</Canvas>
	);
};

export default HeroExperience;
