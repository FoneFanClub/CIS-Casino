import React from 'react'
import image from './image.png'

export default {
  name: 'Dice',
  short_name: 'dice',
  description: '',
  creator: '9sVBzX6K4sWVHveUpWQB1gCuynev33reuNu44b4bndHY',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
