import Users from '../../features/Users/cmp.tsx';
import {View} from "react-native";
import {Header} from "@jacked97/cmp-header";
import styles from './styles';

const UserProfiles = () => {
    return (
        <View style={styles.container}>
            <Header title="Romeo" />
            <View style={styles.content}>
                <Users />
            </View>
        </View>
    );
};

export default UserProfiles;
