import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


function Project() {

    let projectdata = [
        {
            name: "Beauty-Bebo Clone",
            img: "https://i.ibb.co/cDZ0bW1/Screenshot-4.png",
            type: "Collaborative",
            desc: "A Online retail store where users can buy there day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.",
            techstack: "HTML| CSS| JAVASCRIPT",
            livelink: "https://luminous-biscuit-a0fc06.netlify.app",
            gitlink: "https://github.com/ansu-kri/half-top-1982"
        },
        {
            name: "E-Commerce",
            img: "https://i.ibb.co/1sP3hpM/Screenshot-6.png",
            type: "Individual",
            desc: "Clone of the leading cosmetics and skincare brand website front end. Built on HTML, CSS, and JavaScript. It's an individual project completed and executed in 5 days ",
            techstack: "HTML| CSS| JAVASCRIPT",
            livelink: "https://gilded-liger-113101.netlify.app",
            gitlink: "https://github.com/ansu-kri/ecommerce"
        },
        {
            name: "YouTube App",
            img: "https://i.ibb.co/SdD9Fqh/Screenshot-10.png",
            type: "Individual",
            desc: "Youtube Clone where user can search any songs, movies, music and many more. It's an individual project completed and executed in 5 days",
            techstack: "HTML| CSS| JAVASCRIPT",
            livelink: "https://whimsical-strudel-88606e.netlify.app/",
            gitlink: "https://github.com/ansu-kri/youtube-app"
        },

        {
            name: "Dermstore",
            img: "https://i.ibb.co/HT5pLdv/Screenshot-5.png",
            type: "Collaborative",
            desc: "DermStore! provides skin care creams, gels, lotions, moisturizers, supplements, and many others. It also offers spa treatments and salon services.",
            techstack: "HTML| CSS| JAVASCRIPT",
            livelink: "https://remarkable-liger-314d1c.netlify.app/",
            gitlink: "https://github.com/furqansup/curvy-plant-804"
        },
        // {
        //     name: "Recipe App",
        //     img: "",
        //     desc: "",
        //     livelink: "https://courageous-valkyrie-f0e4b0.netlify.app/",
        //     gitlink: ""
        // },
        // {
        //     name: "Netflix Clone",
        //     img: "",
        //     desc: "",
        //     livelink: "",
        //     gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/netflixcopy"
        // }
    ]


    return <Box id="Project" w="full" bg="#13022C" color="#ffffff" p="30px 0px" textAlign="center" pt="100px">
        <Box w="85%" m="auto">
            <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">

                {projectdata && projectdata.map((project) => {
                    return <Box className="projectouter" height={"340px"} width="90%" borderRadius={"10px"} margin="auto">
                        <Box display={["inline", "inline", "flex"]} justifyContent="space-between">
                            <Image w={["100%", "60%", "47%"]} m="auto" src={project.img} alt="project-thumbnail" />
                            <Box w={["100%", "97%", "40%"]} m="auto">
                                <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
                                <Text w={["100%", "90%", "70%"]} m="auto" fontFamily="inherit" textAlign="justify" fontSize={["sm", "md", "md"]}>{project.desc}
                                    <Text fontSize={["sm", "md", "md"]} fontWeight="bold" >Project type :-{project.type} </Text>

                                </Text>
                                <Box textAlign="left" m="auto" p={["2px 0px", "2px 7px", "2px 1px"]} w={["99%", "93%", "70%"]}>

                                    <Text fontSize={["13px", "15px", "16px"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
                                </Box>
                                <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
                                    {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                                    <Button as='a' target='_blank' href={project.livelink} _hover={{ bg: "#4E406F", color: "#ffffff" }} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                    <Button as='a' target='_blank' href={project.gitlink} _hover={{ bg: "#4E406F", color: "#ffffff" }} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                })}

            </Box>
        </Box>
    </Box>
}

export default Project;