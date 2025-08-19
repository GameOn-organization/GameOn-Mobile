import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import * as Location from 'expo-location';
// import axios from 'axios';

// Define the type for data items
interface DataItem {
    label: string;
    value: string;
    icon: string;
}

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [selected1, setSelected1] = useState<string[]>([]);
    const [selected2, setSelected2] = useState<string[]>([]);

    const data: DataItem[] = [
        { label: 'Item 1', value: '1', icon: 'smileo' },
        { label: 'Item 2', value: '2', icon: 'meh' },
        { label: 'Item 3', value: '3', icon: 'frowno' },
        { label: 'Item 4', value: '4', icon: 'star' },
        { label: 'Item 5', value: '5', icon: 'like2' },
        { label: 'Item 6', value: '6', icon: 'dislike2' },
        { label: 'Item 7', value: '7', icon: 'hearto' },
        { label: 'Item 8', value: '8', icon: 'checkcircleo' },
    ];

    const renderItem = (item: DataItem) => (
        <View style={styles.item}>
            <AntDesign name={item.icon as any} size={20} color="black" style={styles.icon} />
            <Text style={styles.selectedTextStyle}>{item.label}</Text>
        </View>
    );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Não foi possível acessar a localização');
                return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
        
            try {
                const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
                console.log('Endereço retornado:', address);

                if (address) {
                const cidade = address.city || address.subregion || address.district || 'Cidade';
                const estado = address.region || 'Estado';
                const pais = address.country || 'País';
        
                setLocalizacao(`${cidade} - ${estado} - ${pais}`);
                } else {
                setLocalizacao(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
                }
            } catch (error) {
                console.log('Erro no reverseGeocodeAsync:', error);
                setLocalizacao(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
            }
        })();
    }, []);      

    // const GOOGLE_API_KEY = '';

    // useEffect(() => {
    // (async () => {
    //     try {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //         Alert.alert('Permissão negada', 'Não foi possível acessar a localização');
    //         return;
    //     }

    //     let { coords } = await Location.getCurrentPositionAsync({});
    //     console.log('Coordenadas:', coords);

    //     const { latitude, longitude } = coords;

    //     // Chamada manual à API do Google
    //     const response = await axios.get(
    //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
    //     );

    //     if (response.data.results.length > 0) {
    //         const components = response.data.results[0].address_components;

    //         const cidade = components.find(c => c.types.includes('locality'))?.long_name;
    //         const estado = components.find(c => c.types.includes('administrative_area_level_1'))?.short_name;
    //         const pais = components.find(c => c.types.includes('country'))?.long_name;

    //         const enderecoFormatado = `${cidade || 'Cidade'} - ${estado || 'Estado'} - ${pais || 'País'}`;
    //         console.log('Endereço formatado:', enderecoFormatado);
    //         setLocalizacao(enderecoFormatado);
    //     }

    //     } catch (error) {
    //     console.error('Erro ao obter localização:', error);
    //     }
    // })();
    // }, []);

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.container}
        >
            <View style={styles.formContainer}>
                <Text style={styles.title}>Criar Perfil</Text>
                
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={20} color="#667eea" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                        placeholder="Nome"
                        placeholderTextColor="#999"
                        keyboardType="default"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="filetext1" size={20} color="#667eea" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setDescricao}
                        value={descricao}
                        placeholder="Descrição"
                        placeholderTextColor="#999"
                        keyboardType="default"
                        multiline
                    />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="calendar" size={20} color="#667eea" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setIdade}
                        value={idade}
                        placeholder="Idade"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name="enviromento" size={20} color="#667eea" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        value={localizacao}
                        onChangeText={setLocalizacao}
                        placeholder="Localização"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.pickerContainer}>
                    <AntDesign name="team" size={20} color="#667eea" style={styles.inputIcon} />
                    <Picker
                        style={styles.picker}
                        selectedValue={sexo}
                        onValueChange={(itemValue) => setSexo(itemValue)}
                    >
                        <Picker.Item label="Selecione o Gênero" value="" />
                        <Picker.Item label="Masculino" value="m" />
                        <Picker.Item label="Feminino" value="f" />
                        <Picker.Item label="Não-Binário" value="nb" />
                    </Picker>
                </View>

                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione os itens"
                    value={selected1}
                    search
                    searchPlaceholder="Buscar..."
                    onChange={setSelected1}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#667eea" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <AntDesign name={item.icon as any} size={17} color="white" style={styles.icon} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                                <AntDesign color="white" name="delete" size={17} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
                
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione os itens"
                    value={selected2}
                    search
                    searchPlaceholder="Buscar..."
                    onChange={setSelected2}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#667eea" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <AntDesign name={item.icon as any} size={17} color="white" style={styles.icon} />
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                                <AntDesign color="white" name="delete" size={17} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    picker: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#333',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 8,
    },
    item: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#667eea',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
});
