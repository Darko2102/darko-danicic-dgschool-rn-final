import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
