import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from "./DetailsScreen";
import {main} from "../../styles/main";
import {Card, Paragraph, Title} from 'react-native-paper';
import Br from "../common/br/Br";
import ButtonPrimary from "../common/button/ButtonPrimary";
import ButtonOutline from "../common/button/ButtonOutline";

const ContentHome = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.home}>
            <View style={styles.buttonSeeStory}>
                <ButtonPrimary text="XEM TRUYỆN" onPress={() => navigation.navigate('Details')}/>
            </View>
            <View>
                <Text style={styles.titleListStory}>DANH SÁCH TRUYỆN KHÁC</Text>
            </View>
            <View style={styles.card}>
                <ScrollView>
                    <Card>
                        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
                        <Card.Content>
                            <Title style={styles.titleStory}>Ngạo Thế Cửu Trọng Thiên</Title>
                            <Paragraph style={styles.titleNormal}>Giới Thiệu Truyện:</Paragraph>
                            <Paragraph style={styles.contentStory}>
                                Sở Dương kiếp trước vì lấy được bí tịch Cửu Kiếp kiếm mà bị cao thủ trong thiên hạ vây
                                giết.
                                <Br numbers={2}/>
                                Trước khi chết, hắn mới ngộ ra con đường của mình từ trước đến nay là sai.
                                <Br/>
                                Dưới sự nuối tiếc, tuyệt vọng, hắn đã dùng chính máu trong tim của mình để kích phát ra
                                tuyệt
                                chiêu
                                cuối cùng của Cửu Kiếp kiếm, không ngờ đã làm sống lại kiếm hồn của Cửu Kiếp kiếm.
                                <Br/>Nhờ
                                năng
                                lực đặc dị của kiếm hồn Cửu Kiếp kiếm, hắn đã quay trở lại thời điểm hắn mới gia nhập
                                môn
                                phái của hắn - Thiên Ngoại lâu.
                                <Br/>Trùng sinh lại với kiếm hồn Cửu Kiếp kiếm trong người,
                                hắn
                                đã đi trên một con đường mới khác hẳn hoàn toàn với kiếp trước, ân oán tình thù kiếm này
                                sẽ
                                giải quyết như thế nào, hắn đi trên con đường kiếm đạo đỉnh phong như thế nào, kiếm đạo
                                là
                                vô tình hay hữu tình, mời quý độc giả theo dõi bộ truyện sẽ rõ…
                            </Paragraph>
                        </Card.Content>
                    </Card>
                </ScrollView>
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
                        headerTintColor: "#000",
                        headerTitleAlign: 'center',
                    }}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    viewButtonReadStory: {
        marginBottom: 50,
        width: '95%',
    },
    buttonReadStory: {
        backgroundColor: main.blueDefault,
        borderWidth: 0
    },
    buttonAnotherApp: {
        marginBottom: 20,
        width: '95%',
    },
    buttonAnotherStore: {
        color: main.darkBold
    },
    buttonListStory: {
        fontWeight: 'bold',
        fontSize: 20,
        color: main.darkBold,
        width: '95%'
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
    card: {
        marginTop: 15,
        width: '95%',
        height: 350,
    },
    titleNormal: {
        fontWeight: 'bold',
        color: main.darkBold
    },
    contentStory: {
        fontSize: 15,
        color: main.darkShy
    },
    buttonSeeStory: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
    },
    titleListStory: {
        fontSize: 19,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: main.darkBold
    },
    titleStory: {
        color: main.blueDefault
    }
});