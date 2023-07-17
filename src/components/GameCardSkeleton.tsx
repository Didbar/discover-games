import { Card, CardBody, Flex, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Flex align='center' justify='center'>
      <Card width='400px' borderRadius='.5rem'>
        <CardBody>
          <Skeleton height='200px' borderRadius='1rem' />
          <Stack mt='5' spacing='3'>
            <SkeletonText />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default GameCardSkeleton
