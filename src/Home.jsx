import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function Home() {
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
                <h1>Future Design</h1>
            </ Box>
            <Box sx={{
                maxWidth: "70vw",
                fontSize: "1.5vw",
                my: -10
            }}>
                <h2>
                    Diseñamos tu página web hecha a medida en las últimas tecnologías
                </h2>
            </Box>
        </Box>)
}

export default Home