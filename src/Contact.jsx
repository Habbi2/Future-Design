import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Quienes() {
    return (
        <Box>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 25
                }} >
                <Toolbar />
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "4vh",
                    mr: 5,
                }}>Contáctenos</Typography>
            </ Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "70vw",

            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "4vh",
                }}>
                    Whatsapp: +05491130599215
                </Typography>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "4vh",
                }}>
                    Mail: futuredesign413@gmail.com
                </Typography>
            </Box>
        </Box>)
}

export default Quienes