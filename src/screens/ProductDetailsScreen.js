import { View, Text, Button, StyleSheet } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Button title="Add to Cart" onPress={() => alert("Added to cart")} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
  },
});
export default ProductDetailsScreen;