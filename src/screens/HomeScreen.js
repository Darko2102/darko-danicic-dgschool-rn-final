import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppButton from "../components/AppButton";
import PRODUCTS from "../data/products.json";

export default function HomeScreen({ navigation }) {
 
  const bestSellers = PRODUCTS.slice(0, 4);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      
      <Header title="ALLEY-OOP" />

      
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>ALLEY-OOP</Text>
        <Text style={styles.heroText}>
          Premium basketball sneakers for players who live the game.
        </Text>

        <AppButton
          title="VIEW SHOP"
          onPress={() => navigation.navigate("Products")}
        />
      </View>

   
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BEST SELLERS</Text>

        <View style={styles.grid}>
          {bestSellers.map((item) => (
            <Pressable
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.productName}>{item.name}</Text>

              <View style={styles.priceRow}>
                <Text style={styles.oldPrice}>€{item.oldPrice}</Text>
                <Text style={styles.price}>€{item.price}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>

     
      <View style={{ marginTop: "auto" }}>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },


  hero: {
    backgroundColor: "#000",
    padding: 30,
    alignItems: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heroText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
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
