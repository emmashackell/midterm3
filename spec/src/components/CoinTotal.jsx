import { Text, View } from 'react-native';
import { coinTotal } from '../coinTotal.js';

export function CoinTotal() {

    let example1 = coinTotal(0,0,0,0,0);
    let example2 = coinTotal(1,1,1,1,1);
    let example3 = coinTotal(0,0,0,0,3);

    return (
        <View>
            <Text>All zero coins = ${example1}</Text>
            <Text>1 of each coin = ${example2}</Text>
            <Text>3 toonies = ${example3}</Text>
        </View>
    );
}
