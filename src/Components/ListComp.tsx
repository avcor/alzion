import { FC } from "react"
import { View, Dimensions, Text, TouchableOpacity } from "react-native"
import { schema } from "../Screens/HomeScreen"
import { useNavigation } from "@react-navigation/native"
import { RootStack } from "../../App"

const ListComp: FC<{ item: schema }> = ({ item }) => {

    const navigation = useNavigation<RootStack>();

    return (
        <TouchableOpacity onPress={() => {
            console.log("pressed");
            navigation.navigate('Detail', { data: item });
        }}>
            <View
                style={{ height: Dimensions.get('window').height / 5, width: 100, backgroundColor: 'pink', marginTop: 10 }}>
                <Text>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListComp