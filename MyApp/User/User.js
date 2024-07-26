import { ActivityIndicator, View, Text } from 'react-native';
import { useQuery } from '@apollo/client'; 
import { GET_POST } from './Query';
import { useRoute } from '@react-navigation/native';

export const User = () => {
    const route = useRoute();
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id: route.params?.id },
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 5 }}>
            {loading ? (
                <ActivityIndicator size="large" color="purple" />
            ) : error ? (
                <Text>{error.message}</Text>
            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{data.user.username}</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>{data.user.email}</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>{data.user.phone}</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>{data.user.company.name}</Text>
                </View>
            )}
        </View>
    );
};
