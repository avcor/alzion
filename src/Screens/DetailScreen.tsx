import { useRoute } from "@react-navigation/native"
import { FC } from "react"
import { View, Text, Image } from "react-native"

const DetailScreen: FC<{}> = ({ }) => {

    const route = useRoute()
    const data = route.params.data;
    console.log(data.image)
    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
            <Image source={require('../assest/rect.png')}
                style={{ position: 'absolute', height: '60%', width: '100%' }}
            />
            <View style={{ flex: 2, paddingLeft: 10 }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 13 }}>
                        {data.name}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 20, }}>
                        Price
                    </Text>
                    <Text style={{ fontSize: 25 }}>
                        {'$' + data.price}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 10 }}>
                        size
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        {data.size}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ overflow: 'visible', }}
                        resizeMode='cover'
                        source={require('../assest/buy.png')} />
                    <Image
                        style={{ overflow: 'visible', }}
                        resizeMode='cover'
                        source={require('../assest/heart.png')} />

                </View>

            </View>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ width: '200%', aspectRatio: 1, marginLeft: -100 }}
                    source={{
                        uri: data.image,
                    }}
                    resizeMode='stretch'>
                </Image>
            </View>

        </View>
    )
}

export default DetailScreen