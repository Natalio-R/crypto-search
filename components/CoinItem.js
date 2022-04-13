import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const CoinItem = ({ coin }) => {
  return (
    <div class="container">
      <div class="row border-top border-1 border-gray py-2 align-items-center">
        <div class="col-1">{coin.market_cap_rank}</div>
        <div class="col-3 d-flex flex-row align-items-center justify-content-start">
          <img src={coin.image} width="30" height="30" />
          <div class="d-flex flex-column align-items-start justify-content-start ms-3">
            <p class="fw-bold lh-sm m-0">{coin.name}</p>
            <p class="fw-light lh-sm m-0 text-uppercase">{coin.symbol}</p>
          </div>
        </div>
        <div class="col-2">
          <View style={styles.conTextPerce1}>
            <Text
              style={[
                styles.pricePercentage,
                coin.price_change_percentage_1h_in_currency > 0
                  ? styles.priceUp
                  : styles.priceDown,
              ]}
            >
              <FontAwesomeIcon
                icon={
                  coin.price_change_percentage_1h_in_currency > 0
                    ? faArrowUp
                    : faArrowDown
                }
              />
              &nbsp;
              {coin.price_change_percentage_1h_in_currency.toFixed(4)} %
            </Text>
          </View>
        </div>
        <div class="col-2">
          <View style={styles.conTextPerce24}>
            <Text
              style={[
                styles.pricePercentage,
                coin.price_change_percentage_24h_in_currency > 0
                  ? styles.priceUp
                  : styles.priceDown,
              ]}
            >
              <FontAwesomeIcon
                icon={
                  coin.price_change_percentage_24h_in_currency > 0
                    ? faArrowUp
                    : faArrowDown
                }
              />
              &nbsp;
              {coin.price_change_percentage_24h_in_currency.toFixed(4)} %
            </Text>
          </View>
        </div>
        <div class="col-2">
          <View style={styles.conTextPerce7}>
            <Text
              style={[
                styles.pricePercentage,
                coin.price_change_percentage_7d_in_currency > 0
                  ? styles.priceUp
                  : styles.priceDown,
              ]}
            >
              <FontAwesomeIcon
                icon={
                  coin.price_change_percentage_7d_in_currency > 0
                    ? faArrowUp
                    : faArrowDown
                }
              />
              &nbsp;
              {coin.price_change_percentage_7d_in_currency.toFixed(4)} %
            </Text>
          </View>
        </div>
        <div class="col-2">
          <View style={styles.conTextPrice}>
            <Text style={styles.textPrice}>
              {coin.current_price.toFixed(3)} €
            </Text>
          </View>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  conTextPrice: {
    display: "flex",
    alignItems: "flex-end",
  },
  textPrice: {
    color: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "600",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    textAlign: "center",
  },
  conTextPerce1: {
    display: "flex",
    alignItems: "flex-end",
  },
  conTextPerce24: {
    display: "flex",
    alignItems: "flex-end",
  },
  conTextPerce7: {
    display: "flex",
    alignItems: "flex-end",
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
