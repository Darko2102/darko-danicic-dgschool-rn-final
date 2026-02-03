import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const [purchased, setPurchased] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleBuyNow = () => {
    clearCart();
    setPurchased(true);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >

      <Header title="ALLEY-OOP" />

   
      <View style={styles.content}>
        
        {purchased && (
          <View style={styles.centerBox}>
            <Text style={styles.successText}>
              ✅ Purchase successful! Thank you for your order.
            </Text>
          </View>
)}


       
        {!purchased && cartItems.length === 0 && (
          <View style={styles.centerBox}>
            <Text style={styles.emptyText}>
              Your cart is empty 
            </Text>
          </View>
)}


       
        {!purchased && cartItems.length > 0 && (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item, index) =>
                item.id + "-" + item.size + "-" + index
              }
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.meta}>
                      Size: {item.size}
                    </Text>
                    <Text style={styles.meta}>
                      Qty: {item.quantity}
                    </Text>
                    <Text style={styles.price}>
                      €{item.price * item.quantity}
                    </Text>
                  </View>

                  <Pressable
                    onPress={() =>
                      removeFromCart(item.id, item.size)
                    }
                  >
                    <Text style={styles.remove}>✕</Text>
                  </Pressable>
                </View>
              )}
            />

           
            <View style={[styles.totalBox, { marginTop: "auto" }]}>

              <Text style={styles.totalText}>
                Total: €{totalPrice}
              </Text>

              <Pressable
                style={styles.buyBtn}
                onPress={handleBuyNow}
              >
                <Text style={styles.buyText}>
                  BUY NOW
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </View>

     
      <View style={{ marginTop: "auto" }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 16,
  },

  card: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
  },

  meta: {
    fontSize: 13,
    color: "#666",
  },

  price: {
    marginTop: 6,
    fontWeight: "bold",
  },

  remove: {
    fontSize: 20,
    color: "#900",
    padding: 6,
  },

 

  emptyText: {
    fontSize: 18,
    color: "#666",
  },

  totalBox: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
    marginTop: 10,
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  buyBtn: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  successBox: {
    alignItems: "center",
    marginTop: 60,
  },

  successText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  centerBox: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

});
