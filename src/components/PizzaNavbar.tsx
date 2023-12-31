import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  Avatar,
} from "@chakra-ui/react";

import React from "react";

import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Flex as="nav" p="10px" mb="2rem">
          <Heading fontSize="3xl">Hello, PrinzEugen 👋</Heading>
          <Spacer />
          <HStack spacing="20px">
            <Box>
              <Avatar
                name="Christian Nwamba"
                size="sm"
                src="https://bit.ly/code-beast"
              />
            </Box>
            <Text>bingchilling@gmail.com</Text>
            <Link to="/">
              <Button colorScheme="messenger">Logout</Button>
            </Link>
          </HStack>
        </Flex>
      </div>
    );
  }
}
