import { View,Image,StyleSheet } from "react-native"
import Svg_container from "./Svg_container"

function  AvatarImage(){
    return(
        <View style={styles.imageContainer}>
            <Image style={styles.avatar_img}></Image>
                <Svg_container/>
        </View>
    )
}

export default AvatarImage

const styles = StyleSheet.create({
    imageContainer: {
        position:'absolute',
        left:205,
        transform: [{translateY: -60}, {translateX: -60}],
        width:120,
        height:120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
      },
    avatar_img:{
        width:'100%',
        height:'100%',
    },
})