import React from 'react'
import image from './image.png'

export default {
  name: 'HiLo',
  short_name: 'hilo',
  description: '',
  creator: '9sVBzX6K4sWVHveUpWQB1gCuynev33reuNu44b4bndHY',
  image,
  app: React.lazy(() => import('./App')),
}
