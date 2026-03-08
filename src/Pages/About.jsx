import { Box, Image, Text } from "@chakra-ui/react";


function About() {
    return <Box id="About" bg="linear-gradient(180deg, rgba(28,14,50,1) 45%, rgba(28,14,50,1) 99%)" color="#ffffff" p="51px 0px" mt="-2px" >
        <Box w="89%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Image w={["60%", "50%", "40%"]} m="auto" mt={["0px", "30px", "auto"]} src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" alt="img" />
            <Box w={["90%", "80%", "46%"]} m="auto">
                <Text textAlign="center" fontWeight="400" mt="7px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="inherit" textAlign="justify" mt="10px" fontSize={["15px", "15px", "17px"]}>
                    ISoftware Engineer with 4+ years of experience building scalable and responsive web applications using React.js, Next.js, and JavaScript (ES6+). Skilled in developing reusable UI components, managing complex state with Redux Toolkit, integrating REST APIs, and optimizing frontend performance for smooth user experiences.

                    Experienced in modern UI development with Tailwind CSS and component-driven architecture. I also have working knowledge of Node.js, Express.js, and MongoDB, enabling effective collaboration on full-stack applications.

                    Recently built a Multi-Tenant SaaS Invoice & Billing Platform with authentication, role-based access control, and payment integration. I’m passionate about building user-centric, product-driven applications and continuously improving engineering practices.
                    <br></br>
                    Tech Stack:
                    React.js | Next.js | JavaScript | TypeScript
                    Node.js | Express.js | MongoDB
                    Redux Toolkit | Tailwind CSS

                </Text>
            </Box>

        </Box>
    </Box>
}

export default About;