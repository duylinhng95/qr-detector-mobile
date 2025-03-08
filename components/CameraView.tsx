import {CameraView, CameraType, useCameraPermissions, CameraViewProps, BarcodeScanningResult} from "expo-camera";
import {useState} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [hasPermission, requestPermission] = useCameraPermissions();

    if (!hasPermission) {
        return <View/>;
    }

    if (!hasPermission.granted) {
        return (
            <View className="flex-1 items-center justify-center gap-x-2">
                <Text>No camera permissions</Text>
                <Button title="Request permissions" onPress={requestPermission}/>
            </View>
        );
    }

    const handleScanningBarcode = (data: BarcodeScanningResult) => {
        console.log(data);
    }


    const cameraViewSettings: CameraViewProps = {
        barcodeScannerSettings: {
            barcodeTypes: ['qr']
        },
        onBarcodeScanned: handleScanningBarcode
    }

    return (
        <CameraView facing={facing} className="flex-1" {...cameraViewSettings}>
            <View className="flex flex-row m-64">

            </View>
        </CameraView>
    );
}