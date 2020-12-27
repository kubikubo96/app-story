import React from "react";
import {Button} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import {main} from "../../../styles/main";

const ButtonOutline = (props) => {
    const {text, onPress} = props;
    return (
        <Button style={styles.button} onPress={onPress} appearance='outline' status='info'>
            {text}
        </Button>
    )
};

const styles = StyleSheet.create({
    button: {
        width: main.mainWidth,
    },
});

export default ButtonOutline