import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { anaPost, woman } from "../../assets";
import { Theme } from "../Theme/Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = () => {
  const [liked, setLiked] = useState(false);

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={woman}
            style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }}
            resizeMode="cover"
          />
          <View>
            <Text style={{ ...Theme.primaryFont, fontSize: 14 }}>
              Ana Rojas
            </Text>
            <Text
              style={{
                ...Theme.lightFontFamily,
                fontSize: 12,
                color: "#3A3636",
              }}
            >
              8 hours ago in Cerro Nutibara
            </Text>
          </View>
          <Pressable onPress={() => setLiked((isLiked) => !isLiked)} style={{position: 'absolute', right: 10}}>
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={25}
              color={liked ? "red" : "black"}
            />
          </Pressable>
        </View>
        <Text
          style={{ ...Theme.regularFontFamily, fontSize: 14, color: "#3A3636" }}
        >
          From my recent cretive photoshoot of the city
        </Text>
      </View>
      <Image source={anaPost} style={{ width: "100%", height: 189 }} />
    </View>
  );
};

export default Card;
