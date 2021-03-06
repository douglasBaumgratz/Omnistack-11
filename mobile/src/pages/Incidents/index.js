import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Touchable,
} from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text styles={styles.headerText}>
          Total de <Text styles={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        styles={styles.incidentList}
        data={[1, 2, 3]}
        renderItem={() => (
          <View styles={styles.incident}>
            <Text styles={styles.incidentProperty}>ONG:</Text>
            <Text styles={styles.incidentValue}>APAG</Text>

            <Text styles={styles.incidentProperty}>CASO:</Text>
            <Text styles={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text styles={styles.incidentProperty}>VALOR:</Text>
            <Text styles={styles.incidentValue}>R$ 120,00</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} collor="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
