import { Pressable, Text, StyleSheet } from "react-native";

const AppButton = ({ title, onPress, variant = "light" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered, pressed }) => [
        styles.button,
        variant === "light" ? styles.light : styles.dark,
        (hovered || pressed) && styles.hover,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "light" ? styles.lightText : styles.darkText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    transitionDuration: "150ms", // web smooth hover
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#000",
  },
  hover: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});
