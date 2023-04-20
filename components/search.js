import {
  Stack,
  FormControl,
  Input,
  Button,
  Heading,
  Container,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Search()  {
  return (
    <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}>
      <Container
        maxW={'lg'}
        bg={'white'}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          React Amsterdam Spring
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={'12px'}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={'gray.300'}
              id={'search'}
              required
              placeholder={'Search for products...'}
              aria-label={'Search'}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={'green'}
              w="100%"
              type={'button'}>
              <SearchIcon />
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}