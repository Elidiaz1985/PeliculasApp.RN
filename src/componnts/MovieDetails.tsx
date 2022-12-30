import React from 'react'
import { View, Text } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}


export const MovieDetails = ( { movieFull, cast } : Props) => {
  return (
    
    // detalles 
    <>
            <View style={{ marginBottom: 15 }}>
                <View style={{ flexDirection:'row', marginLeft: 5 }} >
                <Icon
                    name='star-outline'
                    color='grey'
                    size={ 16 }

                    />

                    <Text>{ movieFull.vote_average }</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>

                



                </View>
                    <Text style={{ fontSize: 20, marginTop: 10 }}>
                        Historia
                    </Text>

                    <Text>
                        { movieFull.overview }
                    </Text>

                    <Text style={{ fontSize: 20, marginTop: 10 }}>
                        Presupuesto
                    </Text>

                    <Text> { currencyFormatter.format( movieFull.budget, { code: 'USD' } ) } </Text>
            
                    <Text style={{ fontSize: 20, marginTop: 10 }}>
                        Actores
                    </Text>
            
            
            </View>




        {/* casting */}

        <FlatList   
        
            data={ cast } 
            keyExtractor={ (item) => item.id.toString() }
            renderItem={ ({item}) => <CastItem actor={ item }/> }        
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            style={{ marginTop: 10 }}
        />


    
    </>
    
  )
}
