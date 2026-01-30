import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BrandItem({ brand }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        pressed && styles.pressed,
      ]}
      onPress={() =>
        navigation.navigate("Sneakers", { brand: brand })
      }
    >
      <Text style={styles.text}>{brand}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#000",
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    fontWeight: "bold",
  },
});
