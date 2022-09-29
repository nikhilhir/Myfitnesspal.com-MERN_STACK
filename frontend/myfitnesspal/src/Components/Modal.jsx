import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function TransitionExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text color='blue' cursor='pointer' onClick={onOpen}>{props.open}</Text>
      <Modal
        size="xs"
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody overflowY="scroll" maxH="100px">
            {props.body}
          </ModalBody>
          <ModalFooter>
            <a href="https://support.myfitnesspal.com/hc/en-us/articles/360059617352" target='_blank'>
              <Button color="blue" mr={3} onClick={onClose}>
                LEARN MORE
              </Button>
            </a>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


export default TransitionExample;