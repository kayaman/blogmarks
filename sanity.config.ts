import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    projectId: 'zyofsvoi',
    dataset: 'production',
    name: 'bookmarks-prod',
    basePath: '/admin',
    title: 'Production',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: 'zyofsvoi',
    dataset: 'development',
    name: 'bookmarks-dev',
    basePath: '/admin',
    title: 'Development',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
