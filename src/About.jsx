import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function About() {
    return (
        <Box>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10px",
                }} >
                <Toolbar />
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "4vh",
                    pt: 60,
                }}>¿Quiénes Somos?</Typography>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "3vh",
                    maxWidth: "70vw",
                    mt: 20
                }}>
                    Somos un grupo dedicado a crear páginas web para Argentina y Latinoamérica. Usamos las últimas tecnologías:
                    Material, React, Firebase, Flutter, MongoDB, Next.
                    Esta página está hecha en React junto con Material, significa que es mas rápida que las páginas normales y se adapta
                    a todas las pantallas.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 5 }}>
                    <Typography sx={{
                        textAlign: "center",
                        fontSize: "4vh",
                        mt: 20
                    }}> Contáctanos! </Typography>
                </ Box>
            </Box>
        </Box>)
}

export default About