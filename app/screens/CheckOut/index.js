import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";


const CheckOut = ({ navigation }) => {
    return (
        <ScrollView>
            <Text>CheckOut</Text>
           {/* Topbar : nút back
           List sp dc chọn
           Phí vc
           Tổng tiền thanh toán 
           ----------------------------------------------------------------
           3 text inputnhập địa chỉ - tên - sdt (khach k có account)
           Nút đặt hàng */}
        </ScrollView>
    );

}
const styles = StyleSheet.create({
})
export default CheckOut;
