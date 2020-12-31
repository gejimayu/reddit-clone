// Components
import { AddIcon } from '@chakra-ui/icons';
import { Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const CreateNewPostButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      position="fixed"
      bottom="50px"
      right="50px"
      borderRadius="50px"
      colorScheme="red"
      onClick={() => {
        router.push('/create-post');
      }}
    >
      <AddIcon color="white" />
      <Text marginLeft="10px" color="white">
        Create Post
      </Text>
    </Button>
  );
};

export default CreateNewPostButton;
