import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Dash from "react-native-dash";

const PADDING_CARD = 15;
const BORDER_RADIUS_CARD = 20;
const PADDING_INNER_CARDS = 3;
const DASH_V_MARGIN = 10;

const Dot = ({ color = "purple", number }) => {
  return (
    <View
      style={{
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
      }}
    >
      <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
        {number}
      </Text>
    </View>
  );
};

const User = ({ user, text, msgNumber }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: PADDING_INNER_CARDS,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/images/portrait-of-man.jpg")}
          fadeDuration={0}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            marginTop: 10,
            borderWidth: 2,
            borderColor: "#7cfc00",
          }}
        />
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text>{user}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      <Dot number={msgNumber} />
    </View>
  );
};

const Group = ({ title, userName, flowers, text, msgNumber }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ color: "gray", fontWeight: "bold", fontSize: 20 }}>
          {title}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {flowers ? (
            <Image
              source={require("../../assets/images/flowers.png")}
              resizeMode="center"
              style={{
                width: 40,
                height: 40,
              }}
            />
          ) : (
            <Ionicons name="ios-basketball-outline" size={40} color="gray" />
          )}
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text>{userName}</Text>
            <Text>{text}</Text>
          </View>
        </View>
        <Dot number={msgNumber} />
      </View>
    </View>
  );
};

const ViewStyleProps = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#ebebeb", marginTop: 20, flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        style={{ flex: 1, backgroundColor: "#fff" }}
      >
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.title}>Swipe</Text>
            <Text style={styles.title2}>Up</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              flex: 0.5,
            }}
          >
            <Text style={styles.friendtitle}>Amigos</Text>
            <AntDesign name="down" size={20} color="#eb2fce" />
          </View>
        </View>
        <View
          style={{
            flex: 0.12,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={styles.chatstitle}>Chats</Text>
        </View>
        <View
          style={{
            flex: 0.05,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={styles.chatstype}>Privado</Text>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 15,
            borderRadius: BORDER_RADIUS_CARD,
            backgroundColor: "white",
            padding: PADDING_CARD,
            elevation: 4,
          }}
        >
          <View style={{ flex: 0.15, flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.friendtitle}>Amigos</Text>
              <MaterialCommunityIcons
                name="emoticon-excited-outline"
                size={25}
                color="gray"
              />
              <MaterialCommunityIcons
                name="emoticon-excited-outline"
                size={25}
                color="gray"
              />
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>En linea</Text>
              <Dot color="#4BB543" number={4} />
            </View>
          </View>
          <View style={{ flex: 0.05, marginVertical: DASH_V_MARGIN }}>
            <Dash
              dashThickness={0.6}
              dashColor="gray"
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ flex: 0.4 }}>
            <User text="A qué hora nos juntamos?" user="Marcos" msgNumber={8} />
            <User text="Estoy saliendo!" user="Jorge" msgNumber={5} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.chatstype}>Matchs</Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: PADDING_CARD,
            borderRadius: BORDER_RADIUS_CARD,
            backgroundColor: "white",
            elevation: 4,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.friendtitle}>Amigos</Text>
            <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
              <MaterialCommunityIcons
                name="emoticon-excited-outline"
                size={25}
                color="gray"
              />
              <MaterialCommunityIcons
                name="emoticon-excited-outline"
                size={25}
                color="gray"
              />
            </View>
            <Text style={styles.friendtitle}>y:</Text>
          </View>

          <View style={{ flex: 1, marginVertical: DASH_V_MARGIN }}>
            <Dash
              dashThickness={0.6}
              dashColor="gray"
              style={{ width: "100%" }}
            />
          </View>

          <Group
            flowers
            userName="Martina"
            title="Las Locas"
            text="Ok!, no hay problema"
            msgNumber={28}
          />
          <View style={{ flex: 1 }}>
            <Dash
              dashThickness={0.6}
              dashColor="gray"
              style={{ width: "100%" }}
            />
          </View>
          <Group
            userName="Jorge"
            title="Basquet Ferro"
            text="Estoy saliendo!"
            msgNumber={23}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            paddingVertical: 10,
            marginVertical: 5,
            elevation: 2,
            borderRadius: BORDER_RADIUS_CARD,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/letters.png")}
              resizeMode="center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 80 / 2,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/letterp.jpg")}
              resizeMode="center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 80 / 2,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/messageicon.png")}
              resizeMode="center"
              style={{
                width: 40,
                height: 40,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("sscreen")}>
            <Image
              source={require("../../assets/images/portrait-of-man2.jpg")}
              fadeDuration={0}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                borderWidth: 2,
                borderColor: "#7cfc00",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: "#ebebeb",
    //borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: "-8%",
    marginRight: "-8%",
    marginBottom: "-8%",
  },
  container3: {
    flex: 0.38,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: "2%",
    marginRight: "2%",
    // marginTop: 10,
  },
  container4: {
    flex: 0.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: "2%",
    marginRight: "2%",
    // marginBottom: 20,
    marginTop: "2%",
  },
  title: {
    fontSize: 30,
    color: "#787778",
  },
  title2: {
    fontSize: 30,
    color: "#eb2fce",
  },
  friendtitle: {
    fontSize: 20,
    color: "#474747",
    fontWeight: "bold",
  },
  chatstitle: {
    fontSize: 30,
    color: "#eb2fce",
    fontWeight: "bold",
  },
  chatstype: {
    color: "black",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
  },
});

export default ViewStyleProps;
