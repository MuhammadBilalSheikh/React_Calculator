import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";



const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttontext: {
        fontSize: 18,
        color: "#000",
    },
})

// type props = {
//     title: string;
//     onPress: () => void;
//     style?: any,
//     textStyle?: any,
// }

type Props = {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

export default function Button({ title, onPress, style, textStyle }: Props) {
    return (
        <TouchableOpacity style={[styles.button, { flex: 1 }, style]} onPress={onPress}>
            {/* <Text style={[styles.buttontext]}>{title}</Text> */}
            <Text style={[styles.buttontext, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}