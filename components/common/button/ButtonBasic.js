import React from "react";
import {Button} from "@ui-kitten/components";
import {StyleSheet} from "react-native";

const ButtonBasic = (props) => {
    const {text, onPress} = props;
    return (
        <Button style={styles.button} onPress={onPress} status='basic'>
            {text}
        </Button>
    )
};

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '90%'
    },
});

export default ButtonBasic