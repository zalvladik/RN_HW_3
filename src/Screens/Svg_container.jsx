import { TouchableOpacity, StyleSheet} from "react-native"
import Svg, { Path,Circle } from "react-native-svg"

function Svg_container (){
    return(
        <TouchableOpacity style={styles.update_avatar_img}>
                    <Svg 
                    width="25" 
                    height="25"
                    fill="#FF6C00"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
                    <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" 
                    fill="#FF6C00"/>
                    </Svg>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    update_avatar_img: {
        position:'absolute',
        width:25,
        height:25,
        bottom:14,
        left:'100%',
        transform: [{translateX: -12.5}],
    },
})

export default Svg_container