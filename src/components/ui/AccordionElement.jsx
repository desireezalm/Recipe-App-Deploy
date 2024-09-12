import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { TagItem } from "./TagItem";

export const AccordionElement = ({ labelArray, text }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem borderColor="teal.200">
        <Box>
          <AccordionButton>
            <Text
              fontWeight="medium"
              color="teal.700"
              fontSize={{ base: "sm", sm: "md" }}
              textAlign="left"
              flex="1"
              text={text}
            >
              {text}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Box>
        <AccordionPanel pb={1}>
          <Flex
            flexDirection="column"
            wrap="wrap"
            maxHeight={{ base: "16rem", md: "20rem" }}
          >
            {labelArray.map((label) => (
              <TagItem
                key={label}
                fontWeight="light"
                fontSize={{ base: "sm", sm: "md" }}
              >
                {label}
              </TagItem>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
