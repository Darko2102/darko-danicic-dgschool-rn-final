import { View, Text, FlatList, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import PRODUCTS from "../data/products.json";

const BRANDS = ["All", "Nike", "Jordan", "Adidas", "Converse"];

const ProductsScreen = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredProducts =
    selectedBrand === "All"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.brand === selectedBrand);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="ALLEY-OOP" />

      {/* FILTER */}
      <View style={styles.filterRow}>
        {BRANDS.map((brand) => (
          <Pressable
            key={brand}
            onPress={() => setSelectedBrand(brand)}
            style={[
              styles.filterBtn,
              selectedBrand === brand && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedBrand === brand && styles.activeFilterText,
              ]}
            >
              {brand}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* PRODUCTS GRID */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },

  /* FILTER */
  filterRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingVertical: 10,
    gap: 10,
  },
  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: "#000",
  },
  filterText: {
    fontSize: 14,
    color: "#000",
  },
  activeFilterText: {
    color: "#fff",
  },

  /* CARD */
  card: {
    width: "48%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#888",
    fontSize: 13,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
