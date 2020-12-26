import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from '@ui-kitten/components';
import DetailsScreen from "./DetailsScreen";
import {main} from "../../styles/main";

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  viewButtonReadStory: {
    marginBottom: 50,
    width: '90%',
  },
  buttonReadStory: {
    backgroundColor: main.blueDefault,
  },
  buttonAnotherApp: {
    marginBottom: 20,
    width: '90%',
  },
  buttonAnotherStore: {
    color: main.darkBold
  },
  textListStory: {
    fontWeight: 'bold',
    fontSize: 17,
    color: main.darkShy
  },
  listStory: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    padding: 2,
    fontSize: 18,
    height: 30,
  },
});

const ContentHome = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.home}>
      <TouchableOpacity style={styles.viewButtonReadStory}>
        <Button style={styles.buttonReadStory} onPress={() => navigation.navigate('Details')}>
          ĐỌC TRUYỆN
        </Button>
      </TouchableOpacity>
      <Text style={styles.textListStory}>DANH SÁCH TRUYỆN KHÁC</Text>
      <View style={styles.listStory}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ContentHome}
          options={{
            title: 'Phàm Nhân Tu Tiên',
            headerStyle: {},
            headerTintColor: "#000",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              // textAlign: 'center',
            },
          }}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen