import React, { Component } from 'react'
import { Text, View } from 'react-native'

const About = (props) => {
    const { deskripsi } = props
    return (
        <View>
            <Text>About The App</Text>
            <Text>{ deskripsi }</Text>
        </View>
    )
}

// class About extends Component {
//     constructor() {
//         super()
//         this.state = {
//             aboutText: 'About The App'
//         }
//     }

//     render() {
//         const { aboutText } = this.state 
//         const { deskripsi } = this.props
//         return (
//             <view>
//                 <Text>{ aboutText }</Text>
//                 <Text>{ deskripsi }</Text>
//             </view>
//         )
//     }
// }
export default About