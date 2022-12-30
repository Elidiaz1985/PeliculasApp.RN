import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';


interface Props {
    actor: Cast
}


export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`

  return (


    <View style={ styles.container }>

        <Image
            source={{ uri }}
            style={{ width:50, height: 50, borderRadius: 10 }}
            
        />
        <View style={ styles.actorInfo }>
            <Text style={{ fontWeight: 'bold' }}>
                { actor.name }
            </Text>

            <Text>
                { actor.character }
            </Text>

        </View>



    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 7,

        elevation: 10,
        marginRight: 10,
    }, 

    actorInfo: {
        marginLeft: 10
    }
})
