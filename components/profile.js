import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import CommentForm from './commentForm';

export default Profile = () => {
    return (
        <View style={styles.profilesContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Profile</Text>
            </View>
            <View style={styles.profPic}>
                <Image source={require('../assets/cutprofilepic.png')} style={styles.image} />
            </View>
            <View>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.text}>Text 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh at felis aliquam consequat eu a tellus. Vestibulum nec justo sit amet tortor scelerisque faucibus. Fusce in nisi vestibulum, tincidunt lorem vel, convallis ligula. Suspendisse tincidunt, nisl ut vehicula varius, dolor nisi rhoncus odio, id efficitur sapien purus at nisi. Nam ut nisi non mauris vehicula hendrerit non ut ligula. Vivamus in urna aliquam, vehicula felis a, tempor mi. Phasellus quis metus et dolor fringilla euismod. Nulla facilisi. Quisque rhoncus vestibulum turpis, nec pretium nunc mollis id.</Text>
                    <Text style={styles.text}>Text 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh at felis aliquam consequat eu a tellus. Vestibulum nec justo sit amet tortor scelerisque faucibus. Fusce in nisi vestibulum, tincidunt lorem vel, convallis ligula. Suspendisse tincidunt, nisl ut vehicula varius, dolor nisi rhoncus odio, id efficitur sapien purus at nisi. Nam ut nisi non mauris vehicula hendrerit non ut ligula. Vivamus in urna aliquam, vehicula felis a, tempor mi. Phasellus quis metus et dolor fringilla euismod. Nulla facilisi. Quisque rhoncus vestibulum turpis, nec pretium nunc mollis id.</Text>
                    <Text style={styles.text}>Text 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh at felis aliquam consequat eu a tellus. Vestibulum nec justo sit amet tortor scelerisque faucibus. Fusce in nisi vestibulum, tincidunt lorem vel, convallis ligula. Suspendisse tincidunt, nisl ut vehicula varius, dolor nisi rhoncus odio, id efficitur sapien purus at nisi. Nam ut nisi non mauris vehicula hendrerit non ut ligula. Vivamus in urna aliquam, vehicula felis a, tempor mi. Phasellus quis metus et dolor fringilla euismod. Nulla facilisi. Quisque rhoncus vestibulum turpis, nec pretium nunc mollis id.</Text>
                    <Text style={styles.text}>Text 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh at felis aliquam consequat eu a tellus. Vestibulum nec justo sit amet tortor scelerisque faucibus. Fusce in nisi vestibulum, tincidunt lorem vel, convallis ligula. Suspendisse tincidunt, nisl ut vehicula varius, dolor nisi rhoncus odio, id efficitur sapien purus at nisi. Nam ut nisi non mauris vehicula hendrerit non ut ligula. Vivamus in urna aliquam, vehicula felis a, tempor mi. Phasellus quis metus et dolor fringilla euismod. Nulla facilisi. Quisque rhoncus vestibulum turpis, nec pretium nunc mollis id.</Text>
                    <Text style={styles.text}>Text 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh at felis aliquam consequat eu a tellus. Vestibulum nec justo sit amet tortor scelerisque faucibus. Fusce in nisi vestibulum, tincidunt lorem vel, convallis ligula. Suspendisse tincidunt, nisl ut vehicula varius, dolor nisi rhoncus odio, id efficitur sapien purus at nisi. Nam ut nisi non mauris vehicula hendrerit non ut ligula. Vivamus in urna aliquam, vehicula felis a, tempor mi. Phasellus quis metus et dolor fringilla euismod. Nulla facilisi. Quisque rhoncus vestibulum turpis, nec pretium nunc mollis id.</Text>
                </ScrollView>
            </View>
            <View>
                <CommentForm />
            </View>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    profilesContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 400,
    },  
    header: {
      backgroundColor: '#2196F3', // Header background color
      height: 80, // Header height
      padding: 10,
      width: 450,
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
    },
    headerText: {
      color: '#FFFFFF', // Text color
      fontSize: 24, // Text size
      fontWeight: 'bold', // Text weight
    },
    profPic: {
        margin: 10,
        borderWidth: 2, // Border width
        borderColor: '#2196F3', // Border color
        borderRadius: 50, // Border radius to make it circular
        overflow: 'hidden', // Clip child content to border radius 
    },
    image: {
        width: 100,
        height: 100,
    },
    scrollView: {
        height: '100%',
        margin: 10,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: '#2196F3',
    },
    scrollViewContent: {
        flexGrow: 1,
        margin: 20,
        paddingBottom: 30,
    },
    text: {
        padding: 20,
        fontSize: 16,
        marginBottom: 10,
    },
});