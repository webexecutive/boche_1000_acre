import { 
    HStack, 
    Skeleton, 
    SkeletonCircle, 
    SkeletonText, 
    Stack, 
    Box, 
    SimpleGrid
} from "@chakra-ui/react";

const ContentSkeleton = () => {
    return (
        <Box w="100%" px={{ base: 4, md: 12, lg: 8 }} py={24} maxW="7xl" mx="auto">
            {/* Header */}
            <Stack gap="4" mb={16} alignItems="center" textAlign="center">
                <Skeleton height="12" width="40%" variant="shine" />
                <Skeleton height="5" width="25%" />
            </Stack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="flex-start">
                {/* Left Side: Long form text / Form */}
                <Stack gap="10">
                    <Box>
                        <Skeleton height="8" width="50%" mb="6" />
                        <SkeletonText noOfLines={6} gap="5" />
                    </Box>

                    <Box>
                        <Skeleton height="8" width="40%" mb="6" />
                        <Stack gap="4">
                            <Skeleton height="12" borderRadius="md" variant="shine" />
                            <Skeleton height="12" borderRadius="md" variant="shine" />
                            <Skeleton height="32" borderRadius="md" variant="shine" />
                        </Stack>
                    </Box>
                </Stack>

                {/* Right Side: Image or Info Block */}
                <Box>
                    <Skeleton height="500px" borderRadius="3xl" variant="pulse" />
                    <HStack mt="8" gap="6">
                        <SkeletonCircle size="12" />
                        <Stack flex="1">
                            <Skeleton height="5" width="60%" />
                            <Skeleton height="4" width="40%" />
                        </Stack>
                    </HStack>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default ContentSkeleton;
