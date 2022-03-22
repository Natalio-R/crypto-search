import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <Text style={styles.coinRank}>{coin.market_cap_rank}</Text>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View style={styles.conTextPerce}>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h} %
        </Text>
      </View>
      <View style={styles.conTextPrice}>
        <Text style={styles.textPrice}>{coin.current_price} $</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
  },
  containerNames: {
    marginLeft: 10,
  },
  coinRank: {
    width: "5%",
    color: "#000",
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  coinName: {
    flexDirection: "row",
    width: "45%",
    textAlign: "left",
  },
  text: {
    color: "#000",
    fontWeight: "700",
  },
  conTextPrice: {
    width: "20%",
    display: "flex",
    alignItems: "flex-end",
  },
  textPrice: {
    color: "#000",
    textAlign: "right",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "600",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
  },
  textSymbol: {
    color: "#333",
    textTransform: "uppercase",
  },
  image: {
    width: 30,
    height: 30,
  },
  conTextPerce: {
    width: "30%",
    display: "flex",
    alignItems: "center",
  },
  pricePercentage: {
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  priceUp: {
    color: "#0B756D",
    backgroundColor: "#0B756D20",
  },
  priceDown: {
    color: "#fc4422",
    backgroundColor: "#fc442220",
  },
});

export default CoinItem;
