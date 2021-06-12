import React from 'react';
import { Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

interface MenuItemsProps {
  children: string;
  menuItemLink: string;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ children, menuItemLink }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize="xl">
      <NavLink
        exact
        to={menuItemLink}
        activeStyle={{
          borderBottom: '3px solid darkblue',
          paddingBottom: '0.2rem',
        }}
      >
        {children}
      </NavLink>
    </Text>
  );
};

export default MenuItems;
