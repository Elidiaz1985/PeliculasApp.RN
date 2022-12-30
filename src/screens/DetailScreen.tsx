import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams, Navigation } from '../navigation/Navigation';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../componnts/MovieDetails';




const screenHeight =  Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route, navigation } : Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (

    <ScrollView>


      <View style={ styles.marginContainer }>

        <View style={ styles.imageContainer }>
            <Image
              source={{ uri }}
              style={ styles.posterImage }
            
            />
        </View>

      </View>


      <View style={ styles.marginContainer }>

        <Text style= { styles.subTitle }>{ movie.original_title }</Text>
        <Text style= { styles.title }>{ movie.title }</Text>
      </View>

       
        {
          isLoading 
          ? <ActivityIndicator/>
          : <MovieDetails movieFull={ movieFull! } cast = { cast }/>
        }

        <View style={ styles.backBoton }>
            <TouchableOpacity
                onPress={ () => navigation.pop()}
            >

                <Icon
                    color= 'white'
                    name='arrow-back-circle-outline'
                    size={ 65 }
                    

            />

            </TouchableOpacity>

        </View>

        

      

    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      overflow: 'hidden',
      height: screenHeight * 0.7,
      
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25

    },
    posterImage: {
      flex: 1,
      
    },
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },

    backBoton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 20
    }



})