import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { TagItem } from "./ui/TagItem";

export const RecipeCard = ({ item, clickFn }) => {
  const healthLabelQty = item.healthLabels.length;
  const dietLabelQty = item.dietLabels.length;
  const cautionLabelQty = item.cautions.length;
  const healthLabelArray = item.healthLabels;

  const croppedHealthLabels = healthLabelArray.filter((labelItem) => {
    if (labelItem == "Vegetarian" || labelItem == "Vegan") {
      return labelItem;
    }
  });

  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      bgColor="teal.200"
      w={{ base: "100%", sm: "22rem" }}
      h={{ base: "fit-content", sm: "40rem" }}
      onClick={() => clickFn(item)}
      _hover={{ bgColor: "teal.300" }}
    >
      <Image
        w={{ base: "100%", sm: "22rem" }}
        h={{ base: "50vh", md: "50%" }}
        objectFit="cover"
        objectPosition="50% 50%"
        src={item.image}
        borderTopRadius="xl"
      />
      <CardBody>
        <Stack mt="3" spacing="2">
          <Text
            color="white"
            fontSize={{ base: "md", sm: "lg" }}
            textAlign="center"
            fontWeight="light"
            letterSpacing="widest"
          >
            {item.mealType}
          </Text>
          <Heading
            fontWeight="bold"
            color="teal.800"
            fontSize={{ base: "md", sm: "lg" }}
          >
            {item.label}
          </Heading>
          <Box>
            <Text
              display="inline-block"
              fontWeight="medium"
              color="teal.700"
              fontSize={{ base: "sm", sm: "md" }}
            >
              dish:{" "}
            </Text>{" "}
            <Text
              display="inline-block"
              fontSize={{ base: "sm", sm: "md" }}
              color="teal.700"
              fontWeight="light"
            >
              {item.dishType}
            </Text>
          </Box>
          <Spacer></Spacer>
          <Divider
            color="teal.100"
            orientation="horizontal"
            w="12rem"
            alignSelf="center"
          ></Divider>
          <Spacer></Spacer>
          {healthLabelQty > 0 && (
            <Flex gap={4} wrap="wrap" alignSelf="center" paddingBottom="1rem">
              {croppedHealthLabels.map((label) => (
                <TagItem
                  key={label}
                  color="white"
                  bgColor="inherit"
                  fontWeight="light"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  {label}
                </TagItem>
              ))}
            </Flex>
          )}

          <Spacer></Spacer>

          {dietLabelQty > 0 && (
            <Flex
              gap={2}
              wrap="wrap"
              fontSize={{ base: "sm", sm: "md" }}
              color="teal.700"
              fontWeight="light"
            >
              <Text display="inline-block" fontWeight="medium" color="teal.700">
                diet:
              </Text>{" "}
              {item.dietLabels.map((dietLabel) => (
                <TagItem key={dietLabel}>{dietLabel}</TagItem>
              ))}
            </Flex>
          )}
          {cautionLabelQty > 0 && (
            <Flex
              gap={2}
              wrap="wrap"
              fontSize={{ base: "sm", sm: "md" }}
              color="teal.700"
              fontWeight="light"
            >
              <Text display="inline-block" fontWeight="medium" color="teal.700">
                caution:
              </Text>{" "}
              {item.cautions.map((caution) => (
                <TagItem key={caution}>{caution}</TagItem>
              ))}
            </Flex>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
