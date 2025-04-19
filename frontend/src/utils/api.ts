import axios from 'axios';
import { API_URL } from '@env';
import {Platform} from 'react-native';

const instance = axios.create({
    baseURL: API_URL,
    timeout: 3000,
    headers: {
        'x-consumer-platform': 'react-native',
        'x-consumer-device': Platform.OS,
    },
});

export default instance;
