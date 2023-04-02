
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import particalesConfig from "./particales.config";

const ParticalesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            params={particalesConfig}
        />
    );
};

export default ParticalesBackground