import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

const ViewStyleProps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.scrollView, { marginTop: "20%" }]}>
          <Text style={styles.title}>Servicios disponibles</Text>
          <View style={[styles.rowContainer, { flex: 1, marginTop: "8%" }]}>
            <View
              style={[
                styles.rowContainer,
                {
                  flex: 0.7,
                  marginTop: "4%",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Entypo name="circle" color="grey" size={18} />
              <Entypo name="circle" color="grey" size={18} />
              <View
                style={[
                  styles.rowContainer,
                  {
                    flex: 2,
                    padding: 6,
                    marginTop: "30%",
                    marginRight: "12%",
                    marginLeft: "-20%",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={38}
                  color="orange"
                />
                <MaterialCommunityIcons
                  name="dump-truck"
                  size={38}
                  color="orange"
                />
              </View>
            </View>

            <View
              style={[
                styles.rowContainer,
                {
                  flex: 1,
                  marginTop: "4%",
                  backgroundColor: "#fff",
                  justifyContent: "space-between",
                  borderRadius: 10,
                },
              ]}
            >
              <Entypo name="circle" color="grey" size={18} />
              <Entypo name="circle" color="grey" size={18} />
              <Entypo name="circle" color="grey" size={18} />
              <View
                style={[
                  styles.rowContainer,
                  {
                    flex: 1,
                    marginTop: "30%",
                    marginRight: "4%",
                    marginLeft: "-20%",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text style={styles.textdias}>Hoy</Text>
                <Text style={styles.textdias}>3 días</Text>
                <Text style={styles.textdias}>5 días</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.rowContainer,
              {
                flex: 1,
                marginVertical: "2%",
                justifyContent: "space-between",
              },
            ]}
          >
            <TouchableOpacity style={styles.buttonOrdenar}>
              <Text style={styles.textPrecios}>Ordenar por</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFecha}>
              <Text style={styles.textFecha}>Fecha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrecios}>
              <Text style={styles.textPrecios}>Precio</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.Container,
            {
              flex: 1,

              marginTop: "4%",
              marginLeft: "6%",
              marginRight: "1%",
              backgroundColor: "lightgray",
              justifyContent: "space-between",
              borderRadius: 20,
            },
          ]}
        >
          <View
            style={[
              styles.rowContainer,
              {
                flex: 1,
                padding: "14%",
                marginBottom: "5%",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={[
                styles.Container,
                {
                  flex: 1,
                  marginLeft: "-12%",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={[styles.rowContainer, { marginTop: "-18%" }]}>
                <FontAwesome name="telegram" size={22} color="green" />
                <Text
                  style={[
                    styles.textdias,
                    { marginLeft: "4%", marginTop: "-2%" },
                  ]}
                >
                  Trelew
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <Ionicons name="location" size={24} color="brown" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                  ]}
                >
                  Buenos Aires
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  $18.157.000.00
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  5 de Agosto
                </Text>
              </View>

              <View style={[styles.Container, { marginTop: "2%" }]}>
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={38}
                  color="black"
                />
              </View>
            </View>
            <View style={[styles.Container, { marginTop: "2%" }]}>
              <TouchableOpacity style={styles.buttonPostular}>
                <Text style={styles.textPostular}>Postularme</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.rowContainer, { marginBottom: "4%" }]}>
            <Text style={styles.textPrecios}>Cupo</Text>
            <Text style={[styles.textPrecios, { fontWeight: "bold" }]}>
              18 de 22
            </Text>
            <View style={styles.Container}>
              <ProgressBar
                style={{ marginTop: "4%", marginBottom: "4%" }}
                progress={0.8}
                color={"red"}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.Container,
            {
              flex: 1,

              marginTop: "4%",
              marginLeft: "6%",
              marginRight: "1%",
              backgroundColor: "lightgray",
              justifyContent: "space-between",
              borderRadius: 20,
            },
          ]}
        >
          <View
            style={[
              styles.rowContainer,
              {
                flex: 1,
                padding: "14%",
                marginBottom: "5%",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={[
                styles.Container,
                {
                  flex: 1,
                  marginLeft: "-12%",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={[styles.rowContainer, { marginTop: "-18%" }]}>
                <FontAwesome name="telegram" size={22} color="green" />
                <Text
                  style={[
                    styles.textdias,
                    { marginLeft: "4%", marginTop: "-2%" },
                  ]}
                >
                  Trelew
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <Ionicons name="location" size={24} color="brown" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 18,
                      fontWeight: "bold",
                    },
                  ]}
                >
                  San Miguel de Tucumán
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  $18.157.000.00
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  5 de Agosto
                </Text>
              </View>

              <View style={[styles.Container, { marginTop: "2%" }]}>
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={38}
                  color="black"
                />
              </View>
            </View>
            <View style={[styles.Container, { marginTop: "2%" }]}>
              <TouchableOpacity style={styles.buttonPostular}>
                <Text style={styles.textPostular}>Postularme</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.rowContainer, { marginBottom: "4%" }]}>
            <Text style={styles.textPrecios}>Cupo</Text>
            <Text style={[styles.textPrecios, { fontWeight: "bold" }]}>
              2 de 10
            </Text>
            <View style={styles.Container}>
              <ProgressBar
                style={{ marginTop: "4%", marginBottom: "4%" }}
                progress={0.2}
                color={"limegreen"}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.Container,
            {
              flex: 1,

              marginTop: "4%",
              marginLeft: "6%",
              marginRight: "1%",
              backgroundColor: "lightgray",
              justifyContent: "space-between",
              borderRadius: 20,
            },
          ]}
        >
          <View
            style={[
              styles.rowContainer,
              {
                flex: 1,
                padding: "14%",
                marginBottom: "5%",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={[
                styles.Container,
                {
                  flex: 1,
                  marginLeft: "-12%",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={[styles.rowContainer, { marginTop: "-18%" }]}>
                <FontAwesome name="telegram" size={22} color="green" />
                <Text
                  style={[
                    styles.textdias,
                    { marginLeft: "4%", marginTop: "-2%" },
                  ]}
                >
                  Trelew
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <Ionicons name="location" size={24} color="brown" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 18,
                      fontWeight: "bold",
                    },
                  ]}
                >
                  San Miguel de Tucumán
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  $18.157.000.00
                </Text>
              </View>

              <View style={[styles.rowContainer, { marginTop: "2%" }]}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
                <Text
                  style={[
                    styles.textdias,
                    {
                      marginLeft: "4%",
                      marginTop: "-2%",
                      fontSize: 20,
                    },
                  ]}
                >
                  5 de Agosto
                </Text>
              </View>

              <View style={[styles.Container, { marginTop: "2%" }]}>
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={38}
                  color="black"
                />
              </View>
            </View>
            <View style={[styles.Container, { marginTop: "2%" }]}>
              <TouchableOpacity style={styles.buttonPostular}>
                <Text style={styles.textPostular}>Postularme</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.rowContainer, { marginBottom: "4%" }]}>
            <Text style={styles.textPrecios}>Cupo</Text>
            <Text style={[styles.textPrecios, { fontWeight: "bold" }]}>
              5 de 10
            </Text>
            <View style={styles.Container}>
              <ProgressBar
                style={{ marginTop: "4%", marginBottom: "4%" }}
                progress={0.5}
                color={"orange"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#ededed",
    marginHorizontal: "1%",
  },
  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
  },
  buttonPostular: {
    flex: 0.1,
    padding: 2,
    backgroundColor: "limegreen",
    borderRadius: 6,
    marginRight: "-18%",
    marginTop: "80%",
  },
  buttonFecha: {
    flex: 0.6,
    backgroundColor: "orange",
    padding: 6,
    borderRadius: 6,
    marginRight: "6%",
  },
  buttonPrecios: {
    flex: 0.6,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 6,
    marginRight: "5%",
  },
  buttonOrdenar: {
    marginLeft: "2%",
    padding: 6,
    borderRadius: 6,
    marginRight: "5%",
    fontSize: 20,
  },

  textFecha: {
    color: "#fff",
    fontSize: 20,
    marginLeft: "12%",
  },
  textPrecios: {
    color: "black",
    fontSize: 20,
    marginLeft: "4%",
  },
  textdias: {
    color: "black",
    fontSize: 20,
  },
  textPostular: {
    color: "#fff",
    fontSize: 18,
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export default ViewStyleProps;
