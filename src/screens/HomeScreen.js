import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppButton from "../components/AppButton";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Header title="ALLEY-OOP" />

      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>ALLEY-OOP</Text>
        <Text style={styles.heroText}>
          Premium basketball sneakers for players who live the game.
        </Text>

        <AppButton
          title="SHOP SNEAKERS"
          onPress={() => navigation.navigate("Products")}
        />
      </View>

      {/* BEST SELLERS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BEST SELLERS</Text>

        <View style={styles.grid}>
          {/* 1 */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://dunkshop.rs/media/catalog/product/cache/368f87f182a84e40d4285889302f4ddb/n/i/nike-kd-18-international-blue-ib6684-400.jpg",
              }}
              style={styles.image}
            />
            <Text style={styles.name}>KD 18 "International Blue"</Text>
            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>€230</Text>
              <Text style={styles.price}>€190</Text>
            </View>
          </View>

          {/* 2 */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://dunkshop.rs/media/catalog/product/cache/368f87f182a84e40d4285889302f4ddb/c/o/converse-shai-001-ares-grey-a19837c.jpg",
              }}
              style={styles.image}
            />
            <Text style={styles.name}>SHAI 001 "Ares Grey"</Text>
            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>€210</Text>
              <Text style={styles.price}>€170</Text>
            </View>
          </View>

          {/* 3 */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://dunkshop.rs/media/catalog/product/cache/368f87f182a84e40d4285889302f4ddb/n/i/nike-kobe-9-elite-low-protro-perspective-io3673-400.jpg",
              }}
              style={styles.image}
            />
            <Text style={styles.name}>Kobe 9 Elite Protro</Text>
            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>€290</Text>
              <Text style={styles.price}>€240</Text>
            </View>
          </View>

          {/* 4 */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://dunkshop.rs/media/catalog/product/cache/368f87f182a84e40d4285889302f4ddb/n/i/nike-giannis-freak-7-bred-for-it-hf3450-600.jpg",
              }}
              style={styles.image}
            />
            <Text style={styles.name}>Giannis Freak 7</Text>
            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>€170</Text>
              <Text style={styles.price}>€140</Text>
            </View>
          </View>
        </View>
      </View>

      {/* FOOTER */}
      <Footer navigation={navigation} />
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
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  oldPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
