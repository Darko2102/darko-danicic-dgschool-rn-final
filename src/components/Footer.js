import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>

      <View style={styles.socials}>
        <Pressable style={styles.icon}>
          <FontAwesome name="instagram" size={22} color="#fff" />
        </Pressable>

        <Pressable style={styles.icon}>
          <FontAwesome name="facebook" size={22} color="#fff" />
        </Pressable>

        <Pressable style={styles.icon}>
          <FontAwesome name="twitter" size={22} color="#fff" />
        </Pressable>

        <Pressable style={styles.icon}>
          <Ionicons name="logo-tiktok" size={22} color="#fff" />
        </Pressable>
      </View>


      <View style={styles.nav}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Products")}>
          <Text style={styles.navText}>Shop</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={styles.navText}>About</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.navText}>Cart</Text>
        </Pressable>
      </View>

      <Text style={styles.copy}>
        © 2026 ALLEY-OOP. All rights reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: "100%",          
    backgroundColor: "#000",
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  socials: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 12,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  navText: {
    color: "#ccc",
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: "600",
  },
  copy: {
    color: "#666",
    textAlign: "center",
    fontSize: 12,
  },
});
