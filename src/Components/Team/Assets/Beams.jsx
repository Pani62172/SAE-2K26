import Beams from './Beams';
import'./Beams.css';

export default function BeamsDemo() {
    return (
<div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
    <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="rgba(226,80,80,0.8)"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={150}
    />
</div>
    );
}