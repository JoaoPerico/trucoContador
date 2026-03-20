import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const [vitorias1, setVitorias1] = useState(0);
  const [vitorias2, setVitorias2] = useState(0);

  function verificarVitoria(pontos, time) {
    if (pontos >= 12) {
      if (time === 1) {
        setVitorias1(vitorias1 + 1);
      } else {
        setVitorias2(vitorias2 + 1);
      }

      setContador1(0);
      setContador2(0);
    }
  }

  // 🔄 Zera só os pontos
  function resetarPontos() {
    setContador1(0);
    setContador2(0);
  }

  // 🆕 Zera tudo
  function novoJogo() {
    setContador1(0);
    setContador2(0);
    setVitorias1(0);
    setVitorias2(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tituloBox}>
        <Text style={styles.titulo}>Contador de Truco</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        {/* NÓS */}
        <View style={styles.coluna}>
          <Text style={styles.label}>Nós</Text>
          <Text>Vitórias: {vitorias1}</Text>
          <Text style={styles.pontos}>{contador1}</Text>

          <TouchableOpacity
            style={styles.botaoMais}
            onPress={() => {
              const novo = Math.min(contador1 + 1, 12);
              setContador1(novo);
              verificarVitoria(novo, 1);
            }}
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
            onPress={() => {
              const novo = Math.min(contador1 + 3, 12);
              setContador1(novo);
              verificarVitoria(novo, 1);
            }}
          >
            <Text style={styles.textoBotao}>TRUCO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador1 + 6, 12);
              setContador1(novo);
              verificarVitoria(novo, 1);
            }}
          >
            <Text style={styles.textoBotao}>SEIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador1 + 9, 12);
              setContador1(novo);
              verificarVitoria(novo, 1);
            }}
          >
            <Text style={styles.textoBotao}>NOVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador1 + 12, 12);
              setContador1(novo);
              verificarVitoria(novo, 1);
            }}
          >
            <Text style={styles.textoBotao}>DOZE</Text>
          </TouchableOpacity>
        </View>

        {/* ELES */}
        <View style={styles.coluna}>
          <Text style={styles.label}>Eles</Text>
          <Text>Vitórias: {vitorias2}</Text>
          <Text style={styles.pontos}>{contador2}</Text>

          <TouchableOpacity
            style={styles.botaoMais}
            onPress={() => {
              const novo = Math.min(contador2 + 1, 12);
              setContador2(novo);
              verificarVitoria(novo, 2);
            }}
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
            onPress={() => {
              const novo = Math.min(contador2 + 3, 12);
              setContador2(novo);
              verificarVitoria(novo, 2);
            }}
          >
            <Text style={styles.textoBotao}>TRUCO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador2 + 6, 12);
              setContador2(novo);
              verificarVitoria(novo, 2);
            }}
          >
            <Text style={styles.textoBotao}>SEIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador2 + 9, 12);
              setContador2(novo);
              verificarVitoria(novo, 2);
            }}
          >
            <Text style={styles.textoBotao}>NOVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              const novo = Math.min(contador2 + 12, 12);
              setContador2(novo);
              verificarVitoria(novo, 2);
            }}
          >
            <Text style={styles.textoBotao}>DOZE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔽 BOTÕES NOVOS */}
      <TouchableOpacity style={styles.botaoReset} onPress={resetarPontos}>
        <Text style={styles.textoBotao}>REINICIAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoReset} onPress={novoJogo}>
        <Text style={styles.textoBotao}>NOVO JOGO</Text>
      </TouchableOpacity>

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

  tituloBox: {
    backgroundColor: "#a93a3a",
    padding: 10,
    borderRadius: 5,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  coluna: {
    alignItems: "center",
    gap: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
  },

  pontos: {
    fontSize: 28,
    fontWeight: "bold",
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

  botao: {
    width: 120,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#333",
  },

  botaoReset: {
    marginTop: 10,
    backgroundColor: "#2b0000",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});