import { Box, Heading, Stack } from '@chakra-ui/react'
import Product from '@/components/product'

export function Featured({ test }) {
  return (
    <Box py='24px'>
      <Heading as='h3' size='lg' textAlign='center'>
        Featured products
      </Heading>
      <Stack direction={['column', 'row']} spacing='24px' align='center' justify='center'>
        {test.map((item) => (
          <Product key={item} />
        ))}
      </Stack>
    </Box>
  )
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 2 === 0 ? [1,2,3] : [1,2,3,4]
  return {
    props: {
      test,
    },
  };
}
export default Featured
