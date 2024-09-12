import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const ShowRecipes = ({ recipeList, clickFn }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={8}
      padding={{ base: 0, sm: "sm", md: "md" }}
      margin={{ base: 0, sm: "sm", md: "md" }}
    >
      {recipeList.map((item) => (
        <RecipeCard
          clickFn={clickFn}
          item={item.recipe}
          key={item.recipe.label}
        />
      ))}
    </SimpleGrid>
  );
};
