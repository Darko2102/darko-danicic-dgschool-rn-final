import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PRODUCTS from "../data/products.json";

const BRANDS = ["All", "Nike", "Adidas", "Jordan", "Converse"];

export default function ProductsScreen() {
  const navigation = useNavigation();
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredProducts =
    selectedBrand === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.brand === selectedBrand);

  return (
    <View style={styles.container}>
    
      <Header title="ALLEY-OOP" />

     
      <View style={styles.filterContainer}>
        {BRANDS.map((brand) => (
          <Pressable
            key={brand}
            onPress={() => setSelectedBrand(brand)}
            style={[
              styles.filterBtn,
              selectedBrand === brand && styles.filterBtnActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedBrand === brand && styles.filterTextActive,
              ]}
            >
              {brand}
            </Text>
          </Pressable>
        ))}
      </View>

     
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>€{item.oldPrice}</Text>
              <Text style={styles.price}>€{item.price}</Text>
            </View>
          </Pressable>
        )}
        ListFooterComponent={
          <Footer />  
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 12,
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  filterBtnActive: {
    backgroundColor: "#000",
  },
  filterText: {
    color: "#000",
    fontWeight: "bold",
  },
  filterTextActive: {
    color: "#fff",
  },


  row: {
    paddingHorizontal: 10,
  },


  card: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 10,
  },

  image: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },

  priceRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  price: {
    fontWeight: "bold",
  },
});
