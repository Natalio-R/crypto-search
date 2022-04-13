import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import logo from "./assets/logo_black.png";
import CoinItem from "./components/CoinItem";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div class="container-fluid">
      <div class="container d-flex justify-content-between align-items-center border-bottom border-primary border-2 border-red py-3 px-0">
        <div class="d-flex justify-content-start align-items-center w-100">
          <img src={logo} width="60" />
          <h1 class="ms-3">Crypo Search</h1>
        </div>
        <TextInput
          placeholder="Buscar una moneda..."
          placeholderTextColor="#666"
          onChangeText={(text) => setSearch(text)}
          aria-label="Buscar una moneda..."
          type="search"
          style={styles.searchInput}
        ></TextInput>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <p class="my-2 fw-bold">#</p>
          </div>
          <div class="col-3">
            <p class="my-2 fw-bold">Moneda</p>
          </div>
          <div class="col-2">
            <p class="my-2 fw-bold text-end">Porcentaje (1h)</p>
          </div>
          <div class="col-2">
            <p class="my-2 fw-bold text-end">Porcentaje (24h)</p>
          </div>
          <div class="col-2">
            <p class="my-2 fw-bold text-end">Porcentaje (7d)</p>
          </div>
          <div class="col-2">
            <p class="my-2 fw-bold text-end">Precio</p>
          </div>
        </div>
      </div>
      <FlatList
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search) ||
            coin.name.toUpperCase().includes(search) ||
            coin.symbol.toUpperCase().includes(search)
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
      <View>
        <Text>
          &copy;2020 Copyright | Todos los derechos reservados. Desarrollado e
          implementado por <a href="https://natalio.netlify.app">Natalio R</a>
        </Text>
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
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
  /*container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    flexDirection: "row",
  },
  title: {
    color: "#000",
    fontSize: 40,
    fontWeight: 700,
    marginLeft: 20,
  },
  list: {
    width: "100%",
    paddingHorizontal: "2.5%",
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
    width: "35%",
    color: "#666",
    fontSize: 16,
    textAlign: "left",
    lineHeight: 40,
    fontWeight: "600",
    "@media (maxWidth: '1000px')": {
      textAlign: "right",
    },
  },
  TextTime1: {
    width: "15%",
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "600",
  },
  TextTime24: {
    width: "15%",
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "600",
  },
  TextTime7: {
    width: "15%",
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "600",
  },
  TextPrecio: {
    width: "15%",
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
  footer: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  },*/
});

export default App;
