import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { Link, router } from "expo-router";

const BottomLoginSheet = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
        <Ionicons name="logo-github" size={26} style={styles.btnIcon} />
        <Text style={styles.btnLightText}>Continue with Github</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
        <Ionicons
          name="logo-google"
          size={26}
          style={styles.btnIcon}
          color={"#fff"}
        />
        <Text style={styles.btnDarkText}>Continue with Google</Text>
      </TouchableOpacity>

      <Link
        href={{
          pathname: "/login",
          params: { type: "register" },
        }}
        style={[defaultStyles.btn, styles.btnOutLine]}
        asChild
      >
        <TouchableOpacity>
          <Ionicons
            name="mail"
            size={26}
            style={styles.btnIcon}
            color={"#fff"}
          />
          <Text style={styles.btnDarkText}>Sign up with Email</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: "/login",
          params: { type: "login" },
        }}
        style={[defaultStyles.btn, styles.btnLight]}
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.btnLightText}>Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default BottomLoginSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    padding: 26,
    gap: 14,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnLight: {
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  btnIcon: {
    paddingRight: 7,
  },
  btnLightText: {
    fontSize: 18,
    fontWeight: "600",
  },
  btnDark: {
    backgroundColor: Colors.grey,
  },
  btnDarkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  btnOutLine: {
    borderWidth: 1,
    borderColor: Colors.light,
  },
});
