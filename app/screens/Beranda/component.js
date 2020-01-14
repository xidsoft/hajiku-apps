import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import styles from './styles';
import IMAGES from '../../configs/images';
import IconHaji from '../../../assets/svgs/IconHaji';
import IconUmroh from '../../../assets/svgs/IconUmroh';
import IconQuiz from '../../../assets/svgs/IconQuiz';
import IconSetting from '../../../assets/svgs/IconSetting';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      jumlahMateri: 8
    };
    // this._showPass = this._showPass.bind(this);
  }
  _onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground style={styles.imageBackground} source={IMAGES.menu}>
            <View style={styles.textContainer}>
              <Text style={styles.textHello}>HALOOOO,</Text>
              <Text style={styles.textName}>Pak Haji</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.cardHaji}>
                <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 8 }}>
                  <IconHaji />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.titleCard}>Haji</Text>
                  <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Materi`}</Text>
                </View>
              </View>
              <View style={styles.cardUmroh}>
                <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 8 }}>
                  <IconUmroh />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.titleCard}>Umroh</Text>
                  <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Materi`}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.cardQuiz}>
              <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 8 }}>
                <IconQuiz />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.titleCard}>Quiz</Text>
                <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Quiz`}</Text>
              </View>
            </View>
            <View style={styles.cardPengaturan}>
              <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 8 }}>
                <IconSetting />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.titleCard}>Pengaturan</Text>
                <Text style={styles.contentCard}>Lihat Selengkapnya</Text>
              </View>
            </View>
          </View>
          <Text style={styles.discover}>Discover Quizqoeh</Text>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    );
  }
}
