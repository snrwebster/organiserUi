import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, content, btnVisibility, btnText }) => {
  const theme = useTheme();
  const mainColor = theme.colors.main;
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>{content}</ModalBody>
          <ModalFooter>
            <Box
            style={{boxShadow:`10px 5px 5px ${mainColor[400]}`}}
              onClick={onClose}
              as="button"
              
              _disabled={{ bg: mainColor[100]  }}
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              px="8px"
              borderRadius="2px"
              fontSize="14px"
              fontWeight=""
              bg=""
              
              borderColor=""
              color=""
              _hover={{ bg: mainColor[400]  }}
              _active={{
                bg: "#888",
                transform: "",
                borderColor: "",
              }}
              _focus={{
                boxShadow: {mainColor},
              }}
            >
              {btnText}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
