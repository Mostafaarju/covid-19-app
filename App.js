import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonCom from './src/components/ButtonCom';
import IllustrationCom from './src/components/IllustrationCom';
import { Colors } from './src/theme/Colors';
import { Spacing } from './src/theme/Spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ScrollView>
        {/* Start Header Section */}
        <View style={styles.header}>
          <View style={{ margin: 24, marginTop: 48 }}>
            <View style={styles.menu}>
              <Image source={require('./assets/menu.png')} />
              <Image source={require('./assets/bell.png')} />
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 'bold',
                  fontSize: 22,
                }}
              >
                Covid 19
              </Text>
              <TouchableOpacity style={styles.countryButton}>
                <View style={styles.containerBtnWrapper}>
                  <Image
                    style={{ marginRight: 10 }}
                    source={require('./assets/usa-new.png')}
                  />
                </View>
                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>USA</Text>
                <Image
                  style={{ marginLeft: 10 }}
                  source={require('./assets/dropdown.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerContent}>
              <Text style={styles.headerContentTitle}>
                Are you feeling sick?
              </Text>
            </View>
            <View style={styles.headerDescription}>
              <Text style={styles.headerDescriptionText}>
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>
              <View style={styles.headerDescriptionBtn}>
                <ButtonCom
                  title='Call Now'
                  icon={require('./assets/phone.png')}
                  backgroundColor={Colors.covidButton}
                />
                <ButtonCom
                  title='Send SMS'
                  icon={require('./assets/message-circle.png')}
                  backgroundColor={Colors.covidBtnTwo}
                />
              </View>
            </View>
          </View>
        </View>
        {/* End Header Section */}
        <View style={styles.mainSection}>
          <View style={{ marginBottom: Spacing[6] }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1.5,
                marginLeft: Spacing[5],
              }}
            >
              Prevention
            </Text>
          </View>
          {/* End text SEction */}

          <View style={styles.mainSectionCom1}>
            <IllustrationCom
              icon={require('./assets/illustration1.png')}
              title='Avoid close contact'
            />
            <IllustrationCom
              icon={require('./assets/illustration2.png')}
              title='Clean your hands often'
            />
            <IllustrationCom
              icon={require('./assets/illustration3.png')}
              title='Wear a facemask'
            />
          </View>
          <View style={{ paddingBottom: 36 }}>
            <Image
              source={require('./assets/guide.png')}
              style={{ alignSelf: 'center', marginTop: 36, width: '100%' }}
              resizeMode='contain'
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: Colors.covidPageBg,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing[9],
    alignItems: 'center',
  },
  countryButton: {
    flexDirection: 'row',
    height: 40,
    width: 116,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderRadius: 40,
  },
  containerBtnWrapper: {
    marginLeft: 10,
  },
  headerContent: {
    marginTop: Spacing[10],
  },
  headerContentTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
  headerDescription: {
    marginTop: Spacing[5],
  },
  headerDescriptionText: {
    color: Colors.white,
  },
  headerDescriptionBtn: {
    flexDirection: 'row',
    marginTop: Spacing[8],
    justifyContent: 'space-between',
  },
  mainSection: {
    marginTop: Spacing[7],
  },
  mainSectionCom1: {
    flexDirection: 'row',
  },
});
