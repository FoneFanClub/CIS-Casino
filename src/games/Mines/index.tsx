import React from 'react'

import image from './image.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description: '',
  creator: '9sVBzX6K4sWVHveUpWQB1gCuynev33reuNu44b4bndHY',
  theme_color: '#ff6a6a',
  image,
  app: React.lazy(() => import('./App')),
}
