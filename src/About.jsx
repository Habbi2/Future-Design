import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function About() {
    return (
        <Box>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "50vh",
                    fontSize: "3vw",
                }} >
                <Toolbar />
                <h1>¿Quiénes Somos?</h1>
            </ Box>
            <Box sx={{
                maxWidth: "70vw",
                fontSize: "1.5vw",
                my: -10
            }}>
                <h2>
                    Somos un grupo dedicado a crear páginas web para Argentina y Latinoamérica. Usamos las últimas tecnologías:
                    Material, React, Firebase, Flutter, MongoDB, Next. Contáctanos!
                </h2>
            </Box>
        </Box>)
}

export default About