import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import SearchBar from '../components/SearchBar';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [responseresult, setResult] = useState([])
    const searchAPI = () => {
        axios.get('https://rktest009.herokuapp.com/getproducts').then(respo => {
            console.log(respo.data)
            setResult(respo.data)
        })
    }
    return <View>
        <SearchBar term={term} onTermChange={(newTerm) => (setTerm)} />
        <Text > Search Screen</Text>
        <Text> {term} </Text>
        <TouchableOpacity onPress={() => searchAPI()}>
            <Text> Call API </Text>
        </TouchableOpacity>
        <Text> Call API Response lenght</Text>

        <FlatList
            data={responseresult}
            renderItem={
                ({ item }) => {
                    return <Image source={{
                        uri: item.image,
                    }} style={{ width: 100, height: 100 }} />
                }
            }


            keyExtractor={i => i.id} />
    </View>
}

const styles = StyleSheet.create({

});

export default SearchScreen;