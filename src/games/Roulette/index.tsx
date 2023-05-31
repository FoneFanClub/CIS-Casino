import React from 'react'
import image from './image.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: '',
  creator: '9sVBzX6K4sWVHveUpWQB1gCuynev33reuNu44b4bndHY',
  image,
  theme_color: '#59ff5f',
  app: React.lazy(() => import('./App')),
}
