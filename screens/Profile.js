import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, images } from "../constants"
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>
        <StatusBar backgroundColor={COLORS.gray}/>
        <View style={{width: "100%"}}>
        <Image
          source={images.cover}
          resizeMode='cover'
          style={{
            height: 228,
            width: "100%"
          }}
        />          
        </View>

        <View style={{flex: 1, alignItems: "center"}}>
            <Image
              source={images.profile}
              resizeMode='contain'
              style={{
                height: 155,
                width: 155,
                borderRadius: 999,
                borderColor: COLORS.primary,
                borderWidth: 2,
                marginTop: -90
              }}
            />

            <Text style={{
              ...FONTS.h3,
              color: COLORS.primary,
              marginVertical: 8
            }}>Sheena Ocon</Text>
            <Text style={{
              color: COLORS.black,
              ...FONTS.body4
            }}>Joined tomorrow</Text>

            <View style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center"
            }}>
              <MaterialIcons
                name="location-on"
                size={24}
                color="black"
              />
              <Text style={{
                ...FONTS.body4,
                marginLeft: 4
              }}>Cagayan de Oro, Philippines</Text>
            </View>
            
            <View style={{
              flex: 1,
              paddingVertical: 8,
              flexDirection: "row"
            }}>

              {/* <View style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: SIZES.padding
              }}>

                <Text style={{
                  ...FONTS.h2,
                  color: COLORS.primary
                }}>122</Text>

                <Text style={{
                  ...FONTS.body4,
                  color: COLORS.primary
                }}>Followers</Text>

              </View> */}
              
            </View>


        </View>
        
    </SafeAreaView>
  )
}

export default Profile;