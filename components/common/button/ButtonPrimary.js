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
        backgroundColor: main.blueDefault,
        borderWidth: 0,
    },
});

export default ButtonPrimary