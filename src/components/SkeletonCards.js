import React from 'react'
import { Stack , Skeleton  } from '@chakra-ui/react'
import Card from './Card'

export default function SkeletonCards(props) {
  return (
    <Card {...props}>
        <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
        <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    </Card>
  )
}
