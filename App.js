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
            onPress={() => setContador1(Math.min(contador1 + 1, 12))}
          >
            <Text>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoMenos}
            onPress={() => setContador1(Math.max(contador1 - 1, 0))}
          >
            <Text>Diminuir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador1(Math.min(contador1 + 3, 12))}
          >
            <Text style={styles.textoBotao}>TRUCO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador1(Math.min(contador1 + 6, 12))}
          >
            <Text style={styles.textoBotao}>SEIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador1(Math.min(contador1 + 9, 12))}
          >
            <Text style={styles.textoBotao}>NOVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador1(Math.min(contador1 + 12, 12))}
          >
            <Text style={styles.textoBotao}>DOZE</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Text>Eles</Text>
          <Text>{contador2}</Text>

          <TouchableOpacity
            style={styles.botaoMais}
            onPress={() => setContador2(Math.min(contador2 + 1, 12))}
          >
            <Text>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoMenos}
            onPress={() => setContador2(Math.max(contador2 - 1, 0))}
          >
            <Text>Diminuir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador2(Math.min(contador2 + 3, 12))}
          >
            <Text style={styles.textoBotao}>TRUCO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador2(Math.min(contador2 + 6, 12))}
          >
            <Text style={styles.textoBotao}>SEIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador2(Math.min(contador2 + 9, 12))}
          >
            <Text style={styles.textoBotao}>NOVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador2(Math.min(contador2 + 12, 12))}
          >
            <Text style={styles.textoBotao}>DOZE</Text>
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

  botao: {
    width: 120,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
