import { Card, CardBody, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='200px' borderRadius='1rem' />
      <CardBody>
        <Stack mt='5' spacing='3'>
          <SkeletonText />
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
