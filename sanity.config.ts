import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    basePath: '/admin',
    projectId: 'zyofsvoi',
    dataset: 'production',
    name: 'bookmarks-prod',
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
    basePath: '/dev-admin',
    title: 'Development',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
