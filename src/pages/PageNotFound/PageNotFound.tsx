import { Button, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Oh no! The page not found! (404)
      </Text>
      <Button><Link to="/">Return to the Main Page</Link></Button>
    </Stack>
  );
}

export default PageNotFound;
