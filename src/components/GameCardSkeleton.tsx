import { Card, CardBody, Flex, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <Skeleton height='200px' borderRadius='1rem' />
        <Stack mt='5' spacing='3'>
          <SkeletonText />
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
