import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image } from "@chakra-ui/react";



function Skills() {

    const frontend = [
        {
            text: "React",
            iconas: "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
            text: "Next.js",
            iconas: "https://cdn.simpleicons.org/nextdotjs/ffffff"
        },
        {
            text: "JavaScript",
            iconas: "https://cdn.simpleicons.org/javascript/F7DF1E"
        },
        {
            text: "TypeScript",
            iconas: "https://cdn.simpleicons.org/typescript/3178C6"
        },
        {
            text: "Redux Toolkit",
            iconas: "https://cdn.simpleicons.org/redux/764ABC"
        },
        {
            text: "React Hook Form",
            iconas: "https://cdn.simpleicons.org/reacthookform/EC5990"
        },
        {
            text: "Tailwind CSS",
            iconas: "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
            text: "HTML",
            iconas: "https://cdn.simpleicons.org/html5/E34F26"
        },
        {
            text: "CSS",
            iconas: "https://cdn.simpleicons.org/css3/1572B6"
        },
        {
            text: "Chakra UI",
            iconas: "https://cdn.simpleicons.org/chakraui/319795"
        },
        {
            text: "Material UI",
            iconas: "https://cdn.simpleicons.org/mui/007FFF"
        }
    ];

    const backend = [
        {
            text: "Node.js",
            iconas: "https://cdn.simpleicons.org/nodedotjs/339933"
        },
        {
            text: "Express.js",
            iconas: "https://cdn.simpleicons.org/express/ffffff"
        },
        {
            text: "MongoDB",
            iconas: "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
            text: "REST APIs",
            iconas: "https://cdn.simpleicons.org/postman/FF6C37"
        }
    ];

    const allskills = [
        {
            text: "Netlify",
            iconas: "https://cdn.simpleicons.org/netlify/00C7B7"
        },
        {
            text: "Render",
            iconas: "https://cdn.simpleicons.org/render/46E3B7"
        },
        {
            text: "Vercel",
            iconas: "https://cdn.simpleicons.org/vercel/ffffff"
        },
        {
            text: "Docker",
            iconas: "https://cdn.simpleicons.org/docker/2496ED"
        },
        {
            text: "CI/CD",
            iconas: "https://cdn.simpleicons.org/githubactions/2088FF"
        },
        {
            text: "Replit",
            iconas: "https://cdn.simpleicons.org/replit/F26207"
        },
        {
            text: "Postman",
            iconas: "https://cdn.simpleicons.org/postman/FF6C37"
        },
        {
            text: "VS Code",
            iconas: "https://cdn.simpleicons.org/visualstudiocode/007ACC"
        }
    ];

    const tools = [
        { text: "Git", iconas: "https://cdn.simpleicons.org/git/F05032" },
        { text: "GitHub", iconas: "https://cdn.simpleicons.org/github/ffffff" },
        { text: "Jira", iconas: "https://cdn.simpleicons.org/jira/0052CC" },
        { text: "NPM", iconas: "https://cdn.simpleicons.org/npm/CB3837" },
        { text: "Render", iconas: "https://cdn.simpleicons.org/render/46E3B7" },
        { text: "Vercel", iconas: "https://cdn.simpleicons.org/vercel/ffffff" },
        { text: "Docker", iconas: "https://cdn.simpleicons.org/docker/2496ED" },
        { text: "Netlify", iconas: "https://cdn.simpleicons.org/netlify/00C7B7" },
        { text: "Postman", iconas: "https://cdn.simpleicons.org/postman/FF6C37" },
        { text: "Replit", iconas: "https://cdn.simpleicons.org/replit/F26207" },
        { text: "VS Code", iconas: "https://cdn.simpleicons.org/visualstudiocode/007ACC" }
    ];

    return <Box id="Skills" w="full" bg="#13022C" color="#ffffff" p="30px 0px" mt="-2px" pt="57px">
        <Box w="85%" m="auto">
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills</Text>
            <Tabs variant='unstyled'>
                <TabList m="10px auto" w={["80%", "85%", "55%"]} gap="5px" justifyContent="space-between">
                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Frontend</Tab>

                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Backend</Tab>

                    <Tab p={["5px", "10px", "8px 10px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>DevOps & Deployment</Tab>

                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Tools & Version Control</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {frontend && frontend.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "8px"]}>
                                        {/*<Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color='white' />*/}
                                        <Image width={["20%", "22%", "24%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="cursive" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {backend && backend.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["20%", "22%", "24%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="cursive" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {allskills && allskills.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["20%", "22%", "24%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="cursive" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {tools && tools.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["20%", "22%", "24%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="cursive" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
}

export default Skills;