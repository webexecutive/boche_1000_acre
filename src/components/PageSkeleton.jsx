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

const PageSkeleton = () => {
    return (
        <Box w="100%" px={8} py={24} maxW="7xl" mx="auto">
            {/* Hero / Header Section */}
            <Stack gap="6" mb={16} maxW="4xl">
                <HStack width="full" gap="5">
                    <SkeletonCircle size="14" variant="pulse" />
                    <Stack flex="1">
                        <Skeleton height="6" width="40%" variant="shine" />
                        <SkeletonText noOfLines={2} gap="3" />
                    </Stack>
                </HStack>
                <Skeleton height="320px" borderRadius="3xl" variant="shine" />
            </Stack>

            {/* Simulated Grid Content */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Box key={item} p={6} borderWidth="1px" borderRadius="2xl" borderColor="gray.100" shadow="sm">
                        <Stack gap="6">
                            {/* Card Image Area */}
                            <Skeleton height="200px" borderRadius="xl" variant="pulse" />

                            {/* Card Profile / Title info */}
                            <HStack gap="4" alignItems="center">
                                <SkeletonCircle size="10" variant="shine" />
                                <Stack flex="1" gap="2">
                                    <Skeleton height="4" width="70%" />
                                    <Skeleton height="4" width="40%" />
                                </Stack>
                            </HStack>

                            {/* Card Description */}
                            <SkeletonText noOfLines={3} gap="4" />

                            {/* Card Badges / Status */}
                            <HStack gap="4" mt={2}>
                                {/* Showcasing loading state with badge */}
                                <Skeleton asChild loading={true} variant="shine" borderRadius="full">
                                    <Badge px={3} py={1}>Category</Badge>
                                </Skeleton>
                                <Skeleton height="6" width="60px" borderRadius="full" variant="pulse" />
                            </HStack>
                        </Stack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default PageSkeleton;
