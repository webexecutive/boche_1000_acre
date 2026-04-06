import { 
    HStack, 
    Skeleton, 
    SkeletonCircle, 
    SkeletonText, 
    Stack, 
    Box, 
    SimpleGrid,
    Badge
} from "@chakra-ui/react";

const DetailsSkeleton = () => {
    return (
        <Box w="100%" px={{ base: 4, md: 12, lg: 4 }} py={24} maxW="7xl" mx="auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                
                {/* Left Column (Main Scroll) */}
                <div className="flex-1 w-full space-y-8">
                    
                    {/* Carousel Area Skeleton */}
                    <Stack gap="4">
                        <Skeleton height={{ base: "250px", md: "400px" }} borderRadius="2xl" variant="pulse" />
                        <HStack gap="3" mt={2} overflow="hidden">
                            {[1, 2, 3, 4].map(idx => (
                                <Skeleton key={idx} width={{ base: "80px", md: "120px" }} height={{ base: "50px", md: "80px" }} borderRadius="xl" variant="shine" />
                            ))}
                        </HStack>
                    </Stack>

                    {/* About Stay / Description Card Skeleton */}
                    <Box bg="white" borderRadius="4xl" p={{ base: 6, md: 10 }} shadow="sm" borderWidth="1px" borderColor="gray.100">
                        <Skeleton height="8" width="40%" mb="6" variant="shine" />
                        <SkeletonText noOfLines={4} gap="4" />
                        <Skeleton height="5" width="20%" mt="6" />
                    </Box>

                    {/* Amenities Card Skeleton */}
                    <Box bg="white" borderRadius="4xl" p={{ base: 6, md: 10 }} shadow="sm" borderWidth="1px" borderColor="gray.100">
                        <Skeleton height="8" width="30%" mb="8" variant="shine" />
                        <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap={8}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <Stack key={i} alignItems="center" gap="3">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="4" width="80%" />
                                </Stack>
                            ))}
                        </SimpleGrid>
                    </Box>
                </div>

                {/* Right side: Room Details Card (Sticky) Skeleton */}
                <div className="hidden lg:block sticky top-24 flex-1 w-full max-w-[400px]">
                    <Box bg="white" borderRadius="4xl" p={10} shadow="sm" borderWidth="1px" borderColor="gray.100">
                        <Skeleton height="10" width="70%" mb="8" variant="shine" />

                        <HStack gap="6" mb="8">
                            <Skeleton height="6" width="30%" />
                            <Skeleton height="6" width="30%" />
                        </HStack>

                        <Stack gap="4" mb="8">
                            {[1, 2, 3, 4].map(i => (
                                <HStack key={i} gap="4">
                                    <SkeletonCircle size="5" />
                                    <Skeleton height="4" width="60%" />
                                </HStack>
                            ))}
                        </Stack>

                        <Stack gap="2" mb="10">
                            <Skeleton height="12" width="60%" variant="shine" />
                        </Stack>

                        <Skeleton height="12" width="100%" borderRadius="full" variant="pulse" />
                    </Box>
                </div>

            </div>
        </Box>
    );
};

export default DetailsSkeleton;
