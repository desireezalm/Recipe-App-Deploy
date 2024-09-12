import { Center, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const pageTitle = "The Recipe Collector";

  return (
    <Center bgColor="teal.100" flexDir="column">
      <Heading
        fontFamily="fantasy"
        letterSpacing="wider"
        size={{ base: "xl", sm: "2xl", md: "3xl" }}
        maxW="100vw"
        mt={2}
        mb={4}
        mx="0.5rem"
        color="teal.600"
      >
        {pageTitle}
      </Heading>

      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </Center>
  );
};
