import React from 'react'

import {WebView, Text} from 'react-native'


const Product = ({navigation}) =>{
    console.log(navigation)
    return (
        <Text>
        </Text>
      //  <WebView source={{uri:/* navigation.state.params.product.url*/}}/>
    )
}

Product.navigationOptions = ({navigation}) => ({
    title:'Descrição',
})



export default Product;