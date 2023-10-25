import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Home() {
    return (
        <Box>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 20
                }} >
                <Toolbar />
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "5vh",
                    mr: 5,
                }}>Future Design</Typography>
            </ Box>
            <Box sx={{
                maxWidth: "70vw",
                minWidth: "1.5vw",
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "3vh",
                }}>
                    Diseñamos tu página web hecha a medida en las últimas tecnologías
                </Typography>
            </Box>
        </Box>)
}

export default Home