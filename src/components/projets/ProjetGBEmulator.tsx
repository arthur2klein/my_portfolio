import Projet from "./Projet";

const ProjetGBEmulator: React.FC = () => {
    return (
        <Projet
            nom="GameBoy Emulator in Rust"
            contexte="Cy-Tech"
            date="October 2023 - November 2023"
            description={[
                "Creation of a GameBoy emulator in Rust",
                "Recuperation of memory from virtual cartridges",
                "Real-time translation of OpCodes from this memory",
                "Reading of the display memory zone",
            ]}
            competences={["Rust", "Assembler"]}
            link="https://github.com/arthur2klein/GBEmulatorRust"
        />
    );
};

export default ProjetGBEmulator;
