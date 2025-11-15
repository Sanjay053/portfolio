import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  IconButton,
  Divider,
  Icon,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { QUICK_LINKS, SOCIAL_LINKS } from "../Constants/footerLinks";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={10}>
      <Container maxW="6xl">
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} mb={8}>

          {/* Brand Section */}
          <Stack spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Sanjay Portfolio
            </Text>
            <Text fontSize="sm">
              UI Developer creating clean and interactive user experiences.
              Let’s build something amazing together!
            </Text>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={3}>
            <Text fontWeight="bold" color="white">
              Quick Links
            </Text>

            {QUICK_LINKS.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </Stack>

          {/* Contact Info */}
          <Stack spacing={3}>
            <Text fontWeight="bold" color="white">
              Contact
            </Text>
            <Text>Email: sanjayrajan053@gmail.com</Text>
            <Text>Phone: +91 93847 74613</Text>
            <Text>Location: Hyderabad, India</Text>
          </Stack>

        </SimpleGrid>

        <Divider borderColor="gray.700" />

        {/* Bottom Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          mt={6}
          spacing={4}
        >
          {/* Social Icons */}
          <HStack spacing={3}>
            {SOCIAL_LINKS.map((item, index) => (
              <IconButton
                key={index}
                aria-label={item.url}
                as="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Icon as={item.icon} boxSize={5} />}
                variant="ghost"
                color="gray.400"
                _hover={{ color: "white" }}
              />
            ))}
          </HStack>

          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Sanjay. All rights reserved.
          </Text>
        </Stack>

      </Container>
    </Box>
  );
}
