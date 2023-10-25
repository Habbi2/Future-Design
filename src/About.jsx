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
                fontSize: "1vw",
                my: -10
            }}>
                <h2>
                    Somos un grupo dedicado a crear páginas web para Argentina y Latinoamérica. Usamos las últimas tecnologías:
                    Material, React, Firebase, Flutter, MongoDB, Next.
                    Esta página está hecha en React junto con Material, significa que es mas rápida que las páginas normales y se adapta
                    a todas las pantallas.
                </h2>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", mt: 5}}>
                <h1> Contáctanos! </h1>
                </Box>
            </Box>
        </Box>)
}

export default About