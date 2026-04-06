import { 
    HStack, 
    Skeleton, 
    SkeletonCircle, 
    SkeletonText, 
    Stack, 
    Box, 
    SimpleGrid
} from "@chakra-ui/react";

const HomeSkeleton = () => {
    return (
        <Box w="100%" animation="fade-in 0.5s">
            {/* Massive Hero Section */}
            <Box w="100%" h="100vh" position="relative">
                <Skeleton w="100%" h="100%" variant="shine" />
                
                {/* Mock Floating Search/Booking Bar */}
                <Box position="absolute" bottom="10%" left="50%" transform="translateX(-50%)" w="90%" maxW="4xl" bg="white" borderRadius="2xl" p={6} shadow="xl">
                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={4} alignItems="center">
                        <Skeleton height="12" borderRadius="lg" />
                        <Skeleton height="12" borderRadius="lg" />
                        <Skeleton height="12" borderRadius="lg" />
                        <Skeleton height="12" borderRadius="full" variant="pulse" />
                    </SimpleGrid>
                </Box>
            </Box>

            {/* Alternating Sections */}
            <Box maxW="7xl" mx="auto" py={20} px={{ base: 4, md: 12, lg: 4 }}>
                <Stack gap={24}>
                    
                    {/* Section 1: Image Left, Text Right (About style) */}
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
                        <Skeleton height="400px" borderRadius="3xl" variant="pulse" />
                        <Stack gap="6">
                            <Skeleton height="10" width="50%" variant="shine" />
                            <SkeletonText noOfLines={6} gap="4" />
                            <Skeleton height="12" width="150px" borderRadius="full" mt={4} />
                        </Stack>
                    </SimpleGrid>

                    {/* Section 2: Carousel/Stays style */}
                    <Box>
                        <Stack gap="4" mb="10" alignItems="center">
                            <Skeleton height="10" width="30%" variant="shine" />
                            <Skeleton height="5" width="40%" />
                        </Stack>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            {[1, 2, 3].map(item => (
                                <Box key={item} p={4} borderWidth="1px" borderRadius="2xl" borderColor="gray.100">
                                    <Skeleton height="250px" borderRadius="xl" mb="4" variant="pulse" />
                                    <Skeleton height="6" width="60%" mb="2" />
                                    <SkeletonText noOfLines={2} gap="2" />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                </Stack>
            </Box>
        </Box>
    );
};

export default HomeSkeleton;
