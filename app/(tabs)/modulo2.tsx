import { SafeAreaView, ScrollView, Text, Pressable, ActivityIndicator, Modal, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Modulo2() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Bem-vindo ao App do Módulo 2!</Text>

                <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                    <Text style={styles.buttonText}>Abrir Modal</Text>
                </Pressable>

                <Modal visible={modalVisible} transparent={true} animationType="slide">
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text>Conteúdo da Modal</Text>
                            <Pressable onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={{ color: 'red' }}>Fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    button: {
        marginBottom: 20
    },
    buttonText: {
        color: 'blue'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    modalButton: {
        marginTop: 10
    }
});
