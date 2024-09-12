import {
  Center,
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Heading,
  Flex,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

import { AccordionElement } from "../components/ui/AccordionElement";
import {
  TextSectionBold,
  TextSectionLight,
  TextSectionNormal,
} from "../components/TextSection";

export const RecipePage = ({ item, clickFn }) => {
  const nutrientArray = [
    item.totalNutrients.ENERC_KCAL,
    item.totalNutrients.PROCNT,
    item.totalNutrients.FAT,
    item.totalNutrients.CHOCDF,
    item.totalNutrients.CHOLE,
    item.totalNutrients.NA,
  ];

  return (
    <Center bgColor="teal.100" flexDirection="column" color="teal.700" w="full">
      <Card borderRadius="xl" w={{ base: "100vw", md: "90vw" }} h="fit-content">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          w={{ base: "100vw", md: "90vw" }}
          lineHeight={2}
        >
          <Image
            src={item.image}
            w={{ base: "100vw", md: "50vw" }}
            h={{ base: "50vh", md: "60vh" }}
            borderTopRadius="xl"
            borderBottomRadius={{ base: 0, md: "xl" }}
            objectFit="cover"
            objectPosition="50% 50%"
            display="inline-block"
          />
          <CardBody h="fit-content">
            <Center>
              <Grid
                w={{ base: "90vw", md: "80vw" }}
                mt="3"
                gap={{ base: 4, md: 8 }}
                templateColumns={{ base: "90vw", md: "40%" }}
                templateRows={{
                  base: "1.5rem 2rem repeat(3, fit-content)",
                  md: "2rem 2rem repeat(2, fit-content)",
                }}
                h="fit-content"
                margin="auto"
              >
                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 2 }}
                  colStart={1}
                  colEnd={{ base: 1, md: 2 }}
                  rowStart={1}
                  margin="auto"
                >
                  <Text
                    color="white"
                    fontSize={{ base: "md", md: "xl" }}
                    textAlign="center"
                    alignSelf="center"
                    fontWeight="light"
                    letterSpacing="widest"
                    bgColor="teal.200"
                    borderRadius="1rem"
                    paddingX="0.7rem"
                    paddingY="0.1rem"
                    w="fit-content"
                  >
                    {item.mealType}
                  </Text>
                </GridItem>
                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 2 }}
                  colStart={1}
                  rowStart={2}
                  margin="auto"
                >
                  <Heading
                    fontWeight="bold"
                    color="teal.700"
                    fontSize={{ base: "md", sm: "xl", md: "3xl" }}
                  >
                    {item.label}
                  </Heading>
                </GridItem>

                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 1 }}
                  colStart={1}
                  colEnd={1}
                  rowStart={3}
                >
                  <Box>
                    <TextSectionBold text={"Dish: "} />{" "}
                    <TextSectionLight fontWeight="light" text={item.dishType} />
                  </Box>
                  <Box>
                    <TextSectionBold text={"Servings: "} />{" "}
                    <TextSectionLight text={item.yield} />
                  </Box>
                  <Box>
                    <TextSectionBold text={"Cooking time: "} />{" "}
                    <TextSectionLight text={item.totalTime + " minutes"} />
                  </Box>

                  <Flex alignItems="start" lineHeight={1} paddingTop="0.9rem">
                    <TextSectionBold text={"Nutrients: "} />{" "}
                    <Stack display="inline-block" paddingLeft="0.25rem">
                      {nutrientArray.map((nutrient) => (
                        <Flex
                          flexDirection="row"
                          key={nutrient.label}
                          gap={1}
                          wrap="nowrap"
                          lineHeight={1.5}
                        >
                          <Text
                            display="inline-block"
                            fontSize={{ base: "sm", md: "md" }}
                            color="teal.700"
                            fontWeight="medium"
                          >
                            {nutrient.label}:{" "}
                          </Text>
                          <TextSectionLight
                            text={
                              nutrient.quantity.toFixed(2) + " " + nutrient.unit
                            }
                          />
                        </Flex>
                      ))}
                    </Stack>
                  </Flex>
                </GridItem>
                <GridItem h={{ base: "fit-content", md: "15rem" }}>
                  <Stack
                    paddingTop="2rem"
                    paddingBottom="2rem"
                    w={{ base: "90vw", md: "75%" }}
                    display="inline-block"
                  >
                    {item.healthLabels.length > 0 && (
                      <AccordionElement
                        labelArray={item.healthLabels}
                        text={"Health information"}
                      />
                    )}
                    {item.dietLabels.length > 0 && (
                      <AccordionElement
                        labelArray={item.dietLabels}
                        text={"Dietary information"}
                      />
                    )}
                    {item.cautions.length > 0 && (
                      <AccordionElement
                        labelArray={item.cautions}
                        text={"Cautions"}
                      />
                    )}
                  </Stack>
                </GridItem>

                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 1 }}
                  colStart={1}
                  rowStart={5}
                  rowEnd={5}
                >
                  {" "}
                  <TextSectionBold
                    text={"Ingredients: "}
                    display="block"
                  />{" "}
                  <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    color="teal.700"
                    paddingTop={{ base: "0.7rem", md: "1.5rem" }}
                    marginBottom={{ base: "1.5rem", md: "3rem" }}
                    wrap="wrap"
                    alignSelf="center"
                    gap={2}
                  >
                    {item.ingredients.map((ingredient) => (
                      <Flex
                        key={ingredient.foodId}
                        w={{ base: "100%", md: "12rem" }}
                        h="fit-content"
                        flexDirection={{ base: "row", md: "column" }}
                        alignItems="center"
                        justifyContent="flex-start"
                        wrap={{ base: "nowrap", md: "wrap" }}
                        gap={2}
                      >
                        <Image
                          src={ingredient.image}
                          w={{ base: "4rem", md: "9rem" }}
                          borderRadius="xl"
                          objectFit="cover"
                          display="inline-block"
                          p={1}
                          paddingRight={{ base: "md", md: "0" }}
                        />
                        <TextSectionNormal
                          textAlign="center"
                          text={ingredient.text}
                        />
                      </Flex>
                    ))}
                  </Flex>
                </GridItem>
              </Grid>
            </Center>
            <Button
              color="white"
              bgColor="teal.200"
              w={{ base: "90vw", md: "fit-content" }}
              padding="1rem"
              mt={14}
              fontWeight="light"
              fontSize={{ base: "sm", md: "md" }}
              letterSpacing="widest"
              _hover={{ bgColor: "teal.300", cursor: "pointer" }}
              _active={{
                transform: "scale(0.98)",
                borderColor: "white",
                borderWidth: "0.1rem",
              }}
              onClick={() => clickFn()}
            >
              <ArrowLeftIcon marginRight="1rem" />
              Return to recipe overview
            </Button>
          </CardBody>
        </Flex>
      </Card>
    </Center>
  );
};
