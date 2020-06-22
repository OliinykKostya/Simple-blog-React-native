import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation, title }) => {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground
      source={require('../assets/comic.jpg')}
      style={styles.header}
    >
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'black',
    letterSpacing: 0.5,
  },
  icon: {
    position: "absolute",
    left: 16,
  }
})

export default Header;
