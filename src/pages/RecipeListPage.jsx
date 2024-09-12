import { useState } from "react";
import { data } from "../utils/data";
import { Center, Text, Box } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { ShowRecipes } from "../components/ShowRecipes";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const recipeList = data.hits;

  // SearchFunction
  const recipeMatches = recipeList.filter((item) => {
    const recipeName = item.recipe.label.toLowerCase();
    const recipeHealthLabels = item.recipe.healthLabels;
    const searchArray = recipeHealthLabels.map((healthLabel) => {
      return healthLabel.toLowerCase();
    });
    searchArray.unshift(recipeName);
    const searchString = JSON.stringify(searchArray);
    const result = searchString.includes(searchField.toLowerCase());
    return result;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Center flexDir="column">
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        as="em"
        fontWeight={500}
        color="teal.500"
        margin="0.5rem"
      >
        Search recipes:
      </Text>
      <Box>
        <Search2Icon color="teal.400" mr="1rem" mb="0.5rem" boxSize="1.3rem" />
        <TextInput
          onChange={handleChange}
          w={{ base: 225, sm: 300 }}
          mt={1}
          mb={8}
        />
      </Box>
      <ShowRecipes clickFn={clickFn} recipeList={recipeMatches} />
    </Center>
  );
};
