import { Tag } from "@chakra-ui/react";

export const TagItem = ({ children, ...props }) => {
  return (
    <Tag
      p={1}
      size="sm"
      variant="solid"
      bgColor="teal.100"
      color="teal.500"
      {...props}
    >
      {children}
    </Tag>
  );
};
