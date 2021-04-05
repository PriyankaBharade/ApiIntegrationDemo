import React from 'react'
import { View, TextInput,Image , StyleSheet } from 'react-native'

const SearchBar = ({term,onTermChange}) => {
    return <View style = {styles.backgroud}>
        <Image source = {require ('../../assets/search.png')} style = {styles.iconStyle}/>
        <TextInput 
        style = {styles.textStyle} 
        placeholder = "Search" 
        value = {term} 
        onChangeText = {newTerm => onTermChange(newTerm)}>
        </TextInput>
    </View>
}

const styles = StyleSheet.create({
  backgroud :{
      backgroundColor : '#cccccc',
      height:30,
      borderRadius:5,
      marginHorizontal:15,
      marginTop : 10,
      padding : 8,
      flexDirection : 'row'
  },
  textStyle : {
   alignSelf : 'center',
   marginLeft : 10
  },
  iconStyle : {
      height :15,
      width : 15,
      alignSelf : "center"
  }
});

export default SearchBar;