import { Text } from "@chakra-ui/react";

export const TextSectionBold = ({ text }) => {
  return (
    <Text
      display="inline-block"
      color="teal.700"
      fontWeight="medium"
      fontSize={{ base: "sm", sm: "md" }}
      w={{ base: "40%", md: "40%" }}
      text={text}
    >
      {text}
    </Text>
  );
};

export const TextSectionLight = ({ text }) => {
  return (
    <Text
      display="inline-block"
      color="teal.700"
      fontWeight="light"
      fontSize={{ base: "sm", sm: "md" }}
      text={text}
    >
      {text}
    </Text>
  );
};

export const TextSectionNormal = ({ text }) => {
  return (
    <Text
      display="inline-block"
      color="teal.700"
      fontWeight="normal"
      fontSize={{ base: "sm", sm: "md" }}
      text={text}
    >
      {text}
    </Text>
  );
};
