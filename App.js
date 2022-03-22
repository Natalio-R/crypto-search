import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";

import CoinItem from "./components/CoinItem";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crypo Search</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar una moneda..."
          placeholderTextColor="#666"
          onChangeText={(text) => setSearch(text)}
        ></TextInput>
      </View>
      <View style={styles.headInfo}>
        <Text style={styles.TextId}>#</Text>
        <Text style={styles.TextMoneda}>Moneda</Text>
        <Text style={styles.TextTime}>24h</Text>
        <Text style={styles.TextPrecio}>Precio</Text>
      </View>
      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        )}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy;2020 Copyright | Todos los derechos reservados. Desarrollado e
          implementado por <a href="https://natalio.netlify.app">Natalio R</a>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "#000",
    fontSize: 40,
    fontWeight: 700,
  },
  list: {
    width: "90%",
  },
  headInfo: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  TextId: {
    width: "5%",
    color: "#666",
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 10,
    lineHeight: 40,
    fontWeight: "800",
  },
  TextMoneda: {
    width: "45%",
    color: "#666",
    fontSize: 16,
    textAlign: "left",
    lineHeight: 40,
    fontWeight: "600",
  },
  TextTime: {
    width: "30%",
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "600",
  },
  TextPrecio: {
    width: "20%",
    color: "#666",
    fontSize: 16,
    textAlign: "right",
    paddingRight: 10,
    lineHeight: 40,
    fontWeight: "600",
  },
  header: {
    paddingHorizontal: "5%",
    paddingVertical: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem",
    borderBottomColor: "#4F46E5",
    borderBottomWidth: 2,
  },
  searchInput: {
    paddingStart: "1rem",
    color: "#000",
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    width: "40%",
    height: 40,
    textAlign: "left",
    outlineWidth: 0,
    outline: "none",
  },
  footer: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  },
});

export default App;
