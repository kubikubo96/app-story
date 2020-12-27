import React from "react";
import {Button} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import {main} from "../../../styles/main";

const ButtonPrimary = (props) => {
    const {text, onPress} = props;
    return (
        <Button style={styles.button} onPress={onPress}>
            {text}
        </Button>
    )
};

const styles = StyleSheet.create({
    button: {
        borderStyle: "solid",
        borderColor: 0,
        fontSize: 16,
        width: main.mainWidth,
        backgroundColor: main.blueDefault,
    },
});

export default ButtonPrimary