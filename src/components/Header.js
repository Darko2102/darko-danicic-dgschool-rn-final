import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title = "ALLEY-OOP" }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>

      <Text style={styles.title}>{title}</Text>

    
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <Text style={styles.navItem}>Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.navItem}>About</Text>
        </TouchableOpacity>

      </View>

 
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.cart}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 30,   
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
  },
  navItem: {
    fontSize: 16,
    color: "#000",
  },
  cart: {
    fontSize: 16,
    fontWeight: "600",
  },
});

