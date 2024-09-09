import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Login() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUpPress = async () => {};
  const onSigninPress = async () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {loading && (
            <View style={[defaultStyles.loadingOverlay]}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
          <Image
            source={require("@/assets/images/logo-dark.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>
            {type === "login" ? "Welcome back" : "Create your account"}
          </Text>
          <View style={{ marginBottom: 30 }}>
            <TextInput
              autoCapitalize="none"
              placeholder="Email"
              placeholderTextColor={Colors.greyLight}
              style={styles.inputField}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor={Colors.greyLight}
              style={styles.inputField}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          {type === "login" ? (
            <TouchableOpacity
              style={[defaultStyles.btn1, styles.btnPrimary]}
              onPress={onSigninPress}
            >
              <Text style={styles.btnPrimaryText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[defaultStyles.btn1, styles.btnPrimary]}
              onPress={onSignUpPress}
            >
              <Text style={styles.btnPrimaryText}>Create account</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.primary,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 16,
  },
});
