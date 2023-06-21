import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const NavbarWithMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = () => {
    // Action to perform when a menu item is pressed
    console.log('Menu item pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuToggle}>
        <Text style={styles.menuButton}>MENU</Text>
      </TouchableOpacity>

      <Modal
        visible={isMenuOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleMenuToggle}
        onBackdropPress={handleMenuToggle}
        style={styles.modal}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 3</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  menuButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  modal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
  menu: {
    backgroundColor: 'transparent',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 0,
    marginBottom: 'auto',
    alignItems: 'center', // Align items to center horizontally
  },
  menuItem: {
    fontSize: 20,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
});

export default NavbarWithMenu;
