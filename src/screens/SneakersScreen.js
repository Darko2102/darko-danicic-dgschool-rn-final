import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import PRODUCTS from "../data/products.json";

export default function SneakersScreen({ route }) {
  const brand = route?.params?.brand;

  const filteredProducts = brand
    ? PRODUCTS.filter((p) => p.brand === brand)
    : PRODUCTS;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {brand ? `${brand} Sneakers` : "All Sneakers"}
      </Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  list: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
