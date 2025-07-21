#!/bin/bash

# Automated Component Library Setup
echo "🚀 Installing React Native Component Libraries..."

# UI Libraries
npm install react-native-elements react-native-vector-icons
npm install react-native-ui-kitten @eva-design/eva
npm install react-native-paper
npm install native-base

# Icon Libraries
npm install react-native-vector-icons
npm install @expo/vector-icons

# Animation Libraries
npm install react-native-animatable
npm install lottie-react-native

# Chart Libraries
npm install react-native-chart-kit
npm install react-native-svg-charts

# Form Libraries
npm install react-native-form-validator
npm install react-native-masked-text

echo "✅ Component libraries installed!"
echo "📊 You now have access to:"
echo "- 200+ UI components"
echo "- 10,000+ icons"
echo "- 50+ chart types"
echo "- Animation libraries"
echo "- Form components"

# Generate component index
node scripts/generate-component-index.js