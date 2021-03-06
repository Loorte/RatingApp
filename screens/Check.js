import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import NavIcon from '../components/NavIcon';
import BackIcon from '../components/BackIcon';
import TextBlock from '../components/TextBlock';

const { width, height } = Dimensions.get('window');

export default class Check extends React.Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: '#5227D0',
					height: '100%',
					width: width,
					alignItems: 'center',
				}}
			>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View
						style={{
							flexDirection: 'row',
							width: width,
							paddingHorizontal: 35,
							justifyContent: 'center',
							marginBottom: 20,
							marginTop: 50,
						}}
					>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} onPress={() => this.props.navigation.goBack()}>
							<BackIcon />
						</TouchableOpacity>
						<View style={{ flex: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
						</View>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
						</TouchableOpacity>
					</View>
				</SafeAreaView>

				<SafeAreaView>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							flex: 1,
							width: width,
							height: height,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							justifyContent: 'flex-end',
						}}
					>
						<Image
							source={require('../assets/icons/avatar.png')}
							style={{ width: 57, height: 57, alignSelf: 'center', bottom: 25 }}
						></Image>
						<Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', bottom: 10 }}>UKnow</Text>
						<ScrollView style={{ padding: 20, paddingTop: 0 }}>
							<TextBlock title="Номер" text="121351" />
							<TextBlock title="Дата" text="03 апреля 2020  19:45." />
							<Text style={{ fontSize: 13, color: '#B5BBC9', fontWeight: '600' }}>Товары</Text>
							<View style={{ flexDirection: 'row', marginBottom: 10 }}>
								<View style={{ flex: 1 }}>
									<Text style={{ fontSize: 16, color: '#0D1F3C' }}>Товар №1</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#B5BBC9',
											fontWeight: 'bold',
											textAlign: 'right',
										}}
									>
										1230 руб.
									</Text>
								</View>
							</View>
							<View style={{ flexDirection: 'row', marginBottom: 10 }}>
								<View style={{ flex: 1 }}>
									<Text style={{ fontSize: 16, color: '#0D1F3C' }}>Товар №2</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#B5BBC9',
											fontWeight: 'bold',
											textAlign: 'right',
										}}
									>
										1230 руб.
									</Text>
								</View>
							</View>
							<View style={{ flexDirection: 'row', marginBottom: 10 }}>
								<View style={{ flex: 1 }}>
									<Text style={{ fontSize: 16, color: '#0D1F3C' }}>Товар №3</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#B5BBC9',
											fontWeight: 'bold',
											textAlign: 'right',
										}}
									>
										1230 руб.
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
