import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class TimetableScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: {}
        };
    }

    render() {
        return (
            <Agenda
                testID='agenda'
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={'2020-04-24'}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                markedDates={{
                    // '2020-04-16': {selected: true, marked: true, selectedColor: 'blue'},
                    // '2020-04-17': {marked: true},
                    // '2020-04-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    // '2020-04-19': {disabled: true, disableTouchEvent: true}
                }}
                // monthFormat={'yyyy'}
                theme={{
                    agendaTodayColor: 'red',
                    agendaKnobColor: '#0E76A8'
                }}
                // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                // hideExtraDays={false}
            />
        );
    }

    loadItems(day) {
        setTimeout(() => {
            this.state.items["2020-04-20"] = [];
            this.state.items["2020-04-21"] = [];
            this.state.items["2020-04-22"] = [];
            this.state.items["2020-04-23"] = [];
            this.state.items["2020-04-24"] = [];
            this.state.items["2020-04-25"] = [];
            this.state.items["2020-04-25"] = [];
            this.state.items["2020-04-26"] = [];

            this.state.items["2020-04-26"].push({
                    name: '8:00 Ăn sáng - Nhà ăn',
                    height: 50
                },
                {
                    name: '9:30: Lấy xét nghiệm - Khu xét nghiệm',
                    height: 50
                },
                {
                    name: '11:30: Ăn trưa',
                    height: 50
                },
                {
                    name: '14:30: Ăn chiều ',
                    height: 50
                },
                {
                    name: '19:00: Ăn tối',
                    height: 50
                },
            );

            this.state.items["2020-04-25"].push({
                    name: '8:00 Ăn sáng - Nhà ăn',
                    height: 50
                },
                {
                    name: '9:30: Lấy xét nghiệm - Khu xét nghiệm',
                    height: 50
                },
                {
                    name: '11:30: Ăn trưa',
                    height: 50
                },
                {
                    name: '14:30: Ăn chiều ',
                    height: 50
                },
                {
                    name: '19:00: Ăn tối',
                    height: 50
                },
            );
            this.state.items["2020-04-24"].push({
                    name: '8:00 Ăn sáng - Nhà ăn',
                    height: 50
                },
                {
                    name: '9:30: Lấy xét nghiệm - Khu xét nghiệm',
                    height: 50
                },
                {
                    name: '11:30: Ăn trưa',
                    height: 50
                },
                {
                    name: '14:30: Ăn chiều ',
                    height: 50
                },
                {
                    name: '19:00: Ăn tối',
                    height: 50
                },
            );
            this.state.items["2020-04-23"].push({
                    name: '8:00 Ăn sáng - Nhà ăn',
                    height: 50
                },
                {
                    name: '9:30: Lấy xét nghiệm - Khu xét nghiệm',
                    height: 50
                },
                {
                    name: '11:30: Ăn trưa',
                    height: 50
                },
                {
                    name: '14:30: Ăn chiều ',
                    height: 50
                },
                {
                    name: '19:00: Ăn tối',
                    height: 50
                },
            );


            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
    }

    renderItem(item) {
        return (
            <TouchableOpacity
                testID='item'
                style={[styles.item, {height: item.height}]}
                onPress={() => Alert.alert(item.name)}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});
