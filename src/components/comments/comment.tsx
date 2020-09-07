import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

import Icon from '../icon/Icon'

const CommentItem = () => {
    return <View style={styles.container}>
        <View style={styles.avatar}>

        </View>
        <Text>That is test comment</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {},
    avatar: {}
});

export default CommentItem;