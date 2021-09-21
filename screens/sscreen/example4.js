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
import { ProgressBar, Colors } from "react-native-paper";

const ViewStyleProps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={[styles.rowContainer, { marginLeft: "75%", marginTop: "8%" }]}
        >
          <FontAwesome name="bell" size={24} color="black" />

          <View
            style={[
              styles.Container,
              { marginLeft: "-12%", marginTop: "-10%" },
            ]}
          >
            <MaterialCommunityIcons
              name="numeric-3-circle"
              size={24}
              color="red"
            />
          </View>
          <View
            style={[styles.Container, { marginLeft: "-2%", marginTop: "-10%" }]}
          >
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={[styles.scrollView, { marginTop: "20%" }]}>
          <Text style={styles.title}>Servicios disponibles</Text>
          <View style={{ flex: 1, marginTop: "8%" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="circle" color="grey" size={18} />
                <MaterialCommunityIcons
                  name="truck-outline"
                  size={38}
                  color="orange"
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="circle" color="grey" size={18} />
                <MaterialCommunityIcons
                  name="dump-truck"
                  size={38}
                  color="orange"
                />
              </View>

              <View
                style={{
                  backgroundColor: "white",
                  flex: 0.8,
                  borderRadius: 10,
                  flexDirection: "row",
                  paddingVertical: 15,
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    style={{ marginBottom: 10 }}
                    name="circle"
                    color="grey"
                    size={18}
                  />
                  <Text style={styles.textdias}>Hoy</Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    style={{ marginBottom: 10 }}
                    name="circle"
                    color="grey"
                    size={18}
                  />

                  <Text style={styles.textdias}>3 días</Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    style={{ marginBottom: 10 }}
                    name="circle"
                    color="grey"
                    size={18}
                  />
                  <Text style={styles.textdias}>5 días</Text>
                </View>
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

              <View style={styles.Container}>
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
          <View
            style={[
              styles.rowContainer,
              {
                alignItems: "center",
                marginBottom: "4%",
              },
            ]}
          >
            <Text style={styles.textPrecios}>Cupo</Text>
            <Text style={[styles.textPrecios, { fontWeight: "bold" }]}>
              18 de 22
            </Text>
            <View style={styles.rowContainer}>
              <View
                style={{
                  height: 5,
                  width: "45%",
                  marginLeft: "4%",
                  backgroundColor: "red",
                }}
              />
              <View
                style={{
                  height: 5,
                  width: "20%",
                  marginRight: "6%",
                  backgroundColor: "grey",
                }}
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
            <View style={styles.rowContainer}>
              <View
                style={{
                  height: 5,
                  width: "34%",
                  marginLeft: "6%",
                  marginTop: "4%",
                  backgroundColor: "green",
                }}
              />
              <View
                style={{
                  height: 5,
                  width: "45%",
                  marginLeft: "-10%",
                  marginTop: "4%",
                  backgroundColor: "grey",
                }}
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
            <View style={styles.rowContainer}>
              <View
                style={{
                  height: 5,
                  width: "40%",
                  marginLeft: "2%",
                  marginTop: "4%",
                  backgroundColor: "orange",
                }}
              />
              <View
                style={{
                  height: 5,
                  width: "39%",
                  marginLeft: "-6%",
                  marginTop: "4%",
                  backgroundColor: "grey",
                }}
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
