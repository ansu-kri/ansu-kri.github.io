import { Box, Button, Image, Text, Stack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Project() {

    const projectdata = [
        {
            name: "Multi-Tenant SaaS Invoice & Billing Platform",
            img: "/dashboard.png",
            type: "Individual",
            desc: "A full-stack SaaS invoice and billing platform where businesses can create invoices, manage customers, track payments and handle subscriptions. Built with secure authentication and Razorpay payment integration supporting multi-tenant architecture.",
            techstack: "Next.js | Node.js | Express.js | MongoDB | Razorpay",
            livelink: "https://invoice-saas-sand.vercel.app/login",
            gitlink: "https://github.com/ansu-kri/invoice--saas"
        },
        {
            name: "Beauty-Bebo Clone",
            img: "https://i.ibb.co/cDZ0bW1/Screenshot-4.png",
            type: "Collaborative",
            desc: "An e-commerce platform where users can browse and purchase beauty and skincare products including makeup, hair care, fragrance and wellness products.",
            techstack: "HTML | CSS | JavaScript",
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
    ];

    return (

        <Box id="Project" bg="#13022C" py="90px" color="white">

            <Box w={["92%", "88%", "80%"]} m="auto">

                <Text
                    fontSize={["3xl", "4xl", "5xl"]}
                    textAlign="center"
                    mb="60px"
                    fontWeight="bold"
                >
                    Projects
                </Text>

                <Box
                    display="grid"
                    gap="40px"
                    gridTemplateColumns={[
                        "1fr",
                        "repeat(2,1fr)",
                        "repeat(3,1fr)"
                    ]}
                >

                    {projectdata.map((project, index) => (

                        <Box
                            key={index}
                            bg="#1c0d3a"
                            borderRadius="14px"
                            overflow="hidden"
                            boxShadow="0 10px 25px rgba(0,0,0,0.3)"
                            transition="all 0.35s ease"
                            _hover={{
                                transform: "translateY(-10px)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
                            }}
                        >

                            <Image
                                src={project.img}
                                alt={project.name}
                                h="200px"
                                w="100%"
                                objectFit="cover"
                            />

                            <Box p="18px">

                                <Text fontSize="xl" fontWeight="bold" mb="6px">
                                    {project.name}
                                </Text>

                                <Text fontSize="sm" mb="10px" color="gray.300">
                                    {project.desc}
                                </Text>

                                <Text fontSize="sm" fontWeight="bold" mb="4px">
                                    Project Type: {project.type}
                                </Text>

                                <Text fontSize="sm" mb="12px">
                                    Tech Stack: {project.techstack}
                                </Text>

                                <Stack direction="row" spacing={4}>

                                    <Button
                                        as="a"
                                        href={project.livelink}
                                        target="_blank"
                                        size="sm"
                                        leftIcon={<BiLinkExternal />}
                                        bg="#7B6EF6"
                                        _hover={{ bg: "#6B5CF6" }}
                                    >
                                        Live
                                    </Button>

                                    <Button
                                        as="a"
                                        href={project.gitlink}
                                        target="_blank"
                                        size="sm"
                                        leftIcon={<BsGithub />}
                                        bg="gray.700"
                                        _hover={{ bg: "gray.600" }}
                                    >
                                        Github
                                    </Button>

                                </Stack>

                            </Box>

                        </Box>

                    ))}

                </Box>

            </Box>

        </Box>

    );

}

export default Project;