import { Dimensions, FlatList, Text, View } from "react-native"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListComp from "../Components/ListComp";

export type schema = {

    id: 1,
    name: "Pepperomia",
    category: "Air Purifier",
    price: 400,
    size: "4\" h",
    water: "250ml",
    light: "30-40%",
    fertilizer: "250gm",
    bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    image: "https://i.imgur.com/4ucOXpZ.png"

}
const HomeScreen = () => {

    const [data, setData] = useState<schema[]>([
        {
            "id": 1,
            "name": "Pepperomia",
            "category": "Air Purifier",
            "price": 400,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/4ucOXpZ.png"
        },
        {
            "id": 2,
            "name": "Watermelon",
            "category": "Air Purifier",
            "price": 350,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/8zthDtc.png"
        },
        {
            "id": 3,
            "name": "Croton Petra",
            "category": "Air Purifier",
            "price": 200,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it. No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it. No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it. No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/FdSRg9O.png"
        },
        {
            "id": 4,
            "name": "Birds nest fern",
            "category": "Air Purifier",
            "price": 160,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/eDwuPY8.png"
        },
        {
            "id": 5,
            "name": "Cactus",
            "category": "Air Purifier",
            "price": 100,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/hW39ZLL.png"
        },
        {
            "id": 6,
            "name": "Aloe Vera",
            "category": "Air Purifier",
            "price": 180,
            "size": "4\" h",
            "water": "250ml",
            "light": "30-40%",
            "fertilizer": "250gm",
            "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            "image": "https://i.imgur.com/hx3ABSI.png"
        }
    ] as schema[])

    useEffect(() => {
        // no more calls to api available
        // fetch('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
        //     .then(async (res: any) => {
        //         let r = await res.json()
        //         // setData(r)
        //         console.log(r)
        //     })
        //     .catch((err: any) => {
        //         // console.warn('at Home ' + err)
        //     })
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Text>Hi</Text>
            <FlatList
                style={{ flex: 1, width: '100%' }}
                data={data}
                renderItem={({ item }) => <ListComp item={item} />}
            />
        </View>
    )
}

export default HomeScreen;