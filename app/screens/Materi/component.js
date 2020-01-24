import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      data: []
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const { params } = this.props.navigation.state;
    const getType = params ? params.type : 'umroh';
    const result = await ENDPOINT.getAll(getType);
    this.setState({ data: result.data, type: getType });
  };
  _onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            flex: 1,
            position: 'absolute',
            alignItems: 'flex-end',
            marginLeft: '100%'
          }}
        >
          <Image source={IMAGES.hiasan} style={{ width: 141, height: 203 }} />
        </View>
        <ScrollView>
          <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>
            {this.state.type.toUpperCase()}
          </Text>
          {this.state.data.map((data, index) => (
            <View key={index}>
              <TouchableOpacity>
                <View style={styles.containerDiscover}>
                  <ImageBackground source={{ uri: data.imageLink }} style={styles.imageDiscover}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.textCard}>{data.title}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
