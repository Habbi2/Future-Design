import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function Quienes() {
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
                <h1>Contáctenos</h1>
            </ Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                maxWidth: "70vw",
                fontSize: "1.5vw",
                my: -20
            }}>
                <h2>
                    Whatsapp: +05491130599215
                </h2>
                <h2>Mail: futuredesign413@gmail.com</h2>
            </Box>
        </Box>)
}

export default Quienes