import * as React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Text,
	TouchableHighlight,
	Image,
	TextInput,
} from 'react-native';
import Header from '../components/Header';
import BackIcon from '../components/BackIcon';
import MessageBlock from '../components/MessageBlock';
import MessageBlock1 from '../components/MessageBlock1';
import MessageSeparator from '../components/MessageSeparator';
import TextMessage from '../components/TextMessage';
import InputMessage from '../components/InputMessage';

const { width, height } = Dimensions.get('window');

export default class Messages extends React.Component {
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
							paddingHorizontal: 15,
							justifyContent: 'center',
							marginBottom: 20,
							marginTop: 50,
						}}
					>
						<TouchableOpacity
							style={{ flex: 1, alignItems: 'flex-start' }}
							onPress={() => this.props.navigation.goBack()}
						>
							<BackIcon />
						</TouchableOpacity>
						<View style={{ flex: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1, width: 33, height: 33, alignItems: 'center' }}>
									<View style={{ width: 36, height: 36, backgroundColor: '#fff', borderRadius: 39 }}>
										<Image
											source={require('../assets/icons/avatar2.png')}
											style={{ width: 30, height: 30, alignSelf: 'center', top: 3 }}
										/>
									</View>
								</View>
								<View style={{ flex: 1, marginLeft: -35, bottom: 3 }}>
									<Text
										style={{
											textAlign: 'left',
											fontSize: 16,
											fontWeight: '700',
											color: '#fff',
											marginBottom: 7,
										}}
									>
										Ada Perry
									</Text>
									<Text
										style={{
											textAlign: 'left',
											fontSize: 16,
											bottom: 10,
											color: '#EDEDED',
										}}
									>
										786-222-8410
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}></TouchableOpacity>
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
							paddingTop: 35,
						}}
					>
						<ScrollView style={{ padding: 20, paddingTop: 0 }}>
							<MessageBlock
								message="Доброе утро!"
								status={require('../assets/icons/check1.png')}
								time="23:06"
							/>
							<MessageSeparator data="15 сентября" />
							<MessageBlock1
								message="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."
								avatar={require('../assets/icons/avatar2.png')}
								time="23:05"
							/>
							<MessageBlock
								message="Доброе утро!"
								status={require('../assets/icons/check1.png')}
								time="23:06"
							/>
							<MessageBlock1 message="🖐" time="23:05" />
							<MessageBlock1 message="Здравствуйте. Как ваши дела?😀" time="23:05" />
							<MessageBlock1
								message="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."
								avatar={require('../assets/icons/avatar2.png')}
								time="23:05"
							/>
							<MessageBlock
								message="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."
								status={require('../assets/icons/check1.png')}
								time="23:06"
							/>
							<MessageBlock message="🖐" status={require('../assets/icons/check2.png')} time="23:06" />
							<TextMessage avatar={require('../assets/icons/avatar2.png')} />
						</ScrollView>
						<InputMessage />
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
