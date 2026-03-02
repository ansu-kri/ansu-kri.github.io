import { Box, Image, Text } from "@chakra-ui/react";


function About() {
    return <Box id="About" bg="linear-gradient(180deg, rgba(28,14,50,1) 45%, rgba(28,14,50,1) 99%)" color="#ffffff" p="51px 0px" mt="-2px" >
        <Box w="89%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Image w={["60%", "50%", "40%"]} m="auto" mt={["0px", "30px", "auto"]} src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" alt="img" />
            <Box w={["90%", "80%", "46%"]} m="auto">
                <Text textAlign="center" fontWeight="400" mt="7px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="inherit" textAlign="justify" mt="10px" fontSize={["15px", "15px", "17px"]}>
                    I’m a React.js Frontend Developer with 4 years of experience building scalable, responsive, and high-performance web applications. I specialize in React.js, Next.js, JavaScript (ES6+), React Hooks, Redux Toolkit, and modern UI development with Tailwind CSS.

                    I create reusable components, manage complex state, integrate APIs, and optimize frontend performance to deliver intuitive and engaging user experiences. With additional experience in Node.js and MongoDB, I can collaborate effectively in full-stack projects when needed.

                    I’m an immediate joiner, passionate about building user-centric, product-driven applications, and looking forward to contributing to a strong engineering team.
                </Text>
            </Box>

        </Box>
    </Box>
}

export default About;