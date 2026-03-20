import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "#a93a3a", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Contador de Truco
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Text>Nós</Text>
          <Text>{contador1}</Text>

          <TouchableOpacity
            style={styles.botaoMais}
            onPress={() => setContador1(contador1 + 1)}
          >
            <Text>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoMenos}
            onPress={() => setContador1(contador1 - 1)}
          >
            <Text>Diminuir</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Text>Eles</Text>
          <Text>{contador2}</Text>

          <TouchableOpacity
            style={styles.botaoMais}
            onPress={() => setContador2(contador2 + 1)}
          >
            <Text>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoMenos}
            onPress={() => setContador2(contador2 - 1)}
          >
            <Text>Diminuir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    backgroundColor: "#5d5959",
    alignItems: "center",
    justifyContent: "center",
  },

  botaoMais: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
  },

  botaoMenos: {
    backgroundColor: "#F44336",
    padding: 15,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
