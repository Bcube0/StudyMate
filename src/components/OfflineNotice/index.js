import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, Platform, AppState } from 'react-native';
const { width } = Dimensions.get('window');
import NetInfo from "@react-native-community/netinfo";

const OfflineNotice = () => {

    const [isInternetReachable, setInternetReachable] = useState(null);
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        const netInfoSubscription = NetInfo.addEventListener(state => {
            setInternetReachable(state.isInternetReachable);
        });

        const appStateSubscription = AppState.addEventListener("change", nextAppState => {
            if (appState.match(/inactive|background/) && nextAppState === "active") {
                // App has come to the foreground, recheck the internet connection
                NetInfo.fetch().then(state => {
                    setInternetReachable(state.isInternetReachable);
                });
            }
            setAppState(nextAppState);
        });

        return () => {
            netInfoSubscription();
            appStateSubscription.remove();
        };
    }, [appState]);

    if (isInternetReachable || isInternetReachable == null) {
        return null;
    } else {
        return (
            <View>
                
            </View>
            // <SafeAreaView style={styles.offlineContainer}>
            //     {/* <View style={styles.offlineContainer1}>
            //         <Text style={styles.offlineText}>No Internet Connection</Text>
            //     </View> */}
            // </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    offlineContainer: {
        marginTop: Platform.OS == 'ios' ? 0 : 20,
        backgroundColor: '#b52424',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        position: 'absolute',
    },
    offlineContainer1: {
        backgroundColor: '#b52424',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS == 'ios' ? 0 : 10,
        paddingBottom: 10,
    },
    offlineText: {
        color: '#fff'
    }
});

export default OfflineNotice;

