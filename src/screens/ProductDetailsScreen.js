import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const SIZES = [40, 41, 42, 43, 44, 45];

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    navigation.navigate("Cart");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
     
      <Header title="ALLEY-OOP" />

      
      <View style={styles.content}>
        
        <Image source={{ uri: product.image }} style={styles.image} />

        
        <Text style={styles.name}>{product.name}</Text>

      
        <Text style={styles.brand}>{product.brand}</Text>

        
        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>€{product.oldPrice}</Text>
          <Text style={styles.price}>€{product.price}</Text>
        </View>

      
        <Text style={styles.sectionTitle}>Select size</Text>
        <View style={styles.sizesRow}>
          {SIZES.map((size) => (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.sizeBoxActive,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive,
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

      
        <Text style={styles.sectionTitle}>Quantity</Text>
        <View style={styles.qtyRow}>
          <Pressable style={styles.qtyBtn} onPress={decreaseQty}>
            <Text style={styles.qtyText}>−</Text>
          </Pressable>

          <Text style={styles.qtyNumber}>{quantity}</Text>

          <Pressable style={styles.qtyBtn} onPress={increaseQty}>
            <Text style={styles.qtyText}>+</Text>
          </Pressable>
        </View>

        <Pressable
          style={[
            styles.button,
            !selectedSize && styles.buttonDisabled,
          ]}
          disabled={!selectedSize}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </Pressable>

       
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          High-performance basketball sneaker designed for explosive moves,
          elite traction and maximum comfort on indoor and outdoor courts.
        </Text>
      </View>

      
      <View style={{ marginTop: "auto" }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 260,
    resizeMode: "contain",
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },

  brand: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },

  priceRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 16,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  sizesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },

  sizeBox: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },

  sizeBoxActive: {
    backgroundColor: "#000",
  },

  sizeText: {
    fontWeight: "bold",
    color: "#000",
  },

  sizeTextActive: {
    color: "#fff",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },

  qtyBtn: {
    borderWidth: 1,
    borderColor: "#000",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  qtyText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  qtyNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
});
