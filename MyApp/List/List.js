import { useQuery } from "@apollo/client";
import { View, Text, Pressable, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GET_USER_LIST } from "./Query";

export const List = () => {
    const { error, loading, data } = useQuery(GET_USER_LIST);

    if (loading) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white", flex: 1 }}>
            <ScrollView style={{ width: "100%" }}>
                {data && data.users && data.users.data.map((item, index) => (
                    <Item key={index} id={item.id} username={item.username} />
                ))}
            </ScrollView>
        </View>
    );
};

const Item = ({ id, username }) => {
    const nav = useNavigation();
    return (
        <View style={{ width: "100%", height: 70, flexDirection: "row", margin: 5 }}>
            <View style={{ flex: 2, justifyContent:"center", paddingLeft: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{username}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Pressable onPress={() => nav.navigate("User", { id })}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{">"}</Text>
                </Pressable>
            </View>
        </View>
    );
};
