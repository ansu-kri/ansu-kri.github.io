import { Box, Image, Text } from "@chakra-ui/react";


function About() {
    return <Box id="About" bg="linear-gradient(180deg, rgba(28,14,50,1) 45%, rgba(28,14,50,1) 99%)" color="#ffffff" p="51px 0px" mt="-2px" >
         <Box w="89%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
         <Image w={["60%", "50%", "40%"]} m="auto" mt={["0px","30px","auto"]} src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" alt="img" />
            <Box w={["90%", "80%", "46%"]} m="auto">
                <Text textAlign="center"  fontWeight="400" mt="7px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="inherit" textAlign="justify" mt="10px" fontSize={["15px", "15px", "17px"]}>
                A self-motivated, hard-working, and ambitious Front End web developer with proficiency in JavaScript, React, HTML and CSS.
                I have made some solo and collaborative projects and continue to have some experience as well as acquiring more knowledge.  
                Looking forward to working as an accountable and competent employee in an exciting Tech company.                  
                </Text>
            </Box>
            
        </Box>
    </Box>
}

export default About;