import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Header title="ALLEY-OOP" />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>About ALLEY-OOP</Text>

        <Image
          source={{
            uri: "https://img.freepik.com/photos-premium/illustration-clip-art-joueur-basket_941097-38662.jpg?semt=ais_hybrid",
          }}
          style={styles.image}
        />

        <Text style={styles.text}>
          ALLEY-OOP is a basketball-focused sneaker shop created for players who
          live and breathe the game.
        </Text>

        <Text style={styles.text}>
          Our mission is simple: bring premium basketball sneakers from the best
          brands like Nike, Adidas, Jordan and Puma to hoopers who care about
          performance and style.
        </Text>

        <Text style={styles.text}>
          Whether you play on the street, indoor court or 3x3 tournaments,
          ALLEY-OOP has sneakers made to match your game.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={{ marginTop: "auto" }}>
        <Footer />

      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
         backgroundColor: "#fff", 
        }, 
    content: { 
        padding: 20, 
    }, 
    title: { 
        fontSize: 26,
         fontWeight: "bold",
          marginBottom: 20, 
          textAlign: "center", 
        }, 
    image: { 
        width: "100%", 
        height: 220, 
        resizeMode: "contain", 
        marginBottom: 20, 
    }, 
    text: { 
        fontSize: 16, 
        lineHeight: 24, 
        marginBottom: 14, 
        color: "#333", 
    }, 
});