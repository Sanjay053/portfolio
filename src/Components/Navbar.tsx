import {
  Box,
  Flex,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NAV_ITEMS } from "../Constants/navbar";

function NavBar({ setIsSticky }: any) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /** Sticky Navbar Effect */
  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 50;
      setSticky(isSticky);
      setIsSticky(isSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsSticky]);

  /** Close dropdown on outside click */
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen]);

  return (
    <Box
      className={`navbar-custom ${sticky ? "sticky-nav" : ""}`}
      px={6}
      py={4}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand text-white">
          Home
        </NavLink>

        {/* Desktop Navigation */}
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </HStack>

        {/* Mobile Menu */}
        <Box
          display={{ base: "block", md: "none" }}
          position="relative"
          ref={dropdownRef}
        >
          <Accordion allowToggle border="none">
            <AccordionItem border="none">
              <AccordionButton
                onClick={() => setIsOpen((prev) => !prev)}
                bg="transparent"
                px={3}
              >
                <Box flex="1" textAlign="left" color="white">
                  Menu
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>

          {isOpen && (
            <Box
              position="absolute"
              top="42px"
              right="0"
              width="150px"
              p={4}
              borderRadius="lg"
              zIndex={999}
              bg="rgba(40,40,60,0.92)"
              border="1px solid rgba(255,255,255,0.15)"
              backdropFilter="blur(10px)"
              boxShadow="0px 8px 20px rgba(0,0,0,0.35)"
            >
              <VStack align="start" spacing={4} color="white">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </VStack>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
