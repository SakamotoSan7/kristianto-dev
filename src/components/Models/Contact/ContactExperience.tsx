import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Computer from './Computer';
import { useMediaQuery } from 'react-responsive';

const ContactExperience = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	return (
		<Canvas
			shadows
			camera={{ position: [0, 3, 7], fov: 45 }}
		>
			<ambientLight
				intensity={0.5}
				color='#fff4e6'
			/>

			<directionalLight
				position={[5, 5, 3]}
				intensity={2.5}
				color='#ffd9b3'
			/>

			<directionalLight
				position={[5, 9, 1]}
				castShadow
				intensity={2.5}
				color='#ffd9b3'
			/>

			<OrbitControls
				minPolarAngle={Math.PI / 5}
				maxPolarAngle={Math.PI / 2}
				enableDamping={true}
				dampingFactor={0.05}
				enablePan={false}
				enableZoom={isMobile ? true : false}
			/>

			<group scale={[1, 1, 1]}>
				<mesh
					receiveShadow
					position={[0, -1.5, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<planeGeometry args={[30, 30]} />
					<meshStandardMaterial color='#a46b2d' />
				</mesh>
			</group>

			<group
				castShadow
				// Computer
				scale={0.025}
				position={[0.2, -1.5, -2]}
			>
				<Computer />
			</group>
		</Canvas>
	);
};

export default ContactExperience;
