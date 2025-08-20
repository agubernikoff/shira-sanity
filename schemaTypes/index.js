import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
import {articleLinks} from './objects/link/articleLinks'
const annotations = [linkEmailType, linkExternalType, linkInternalType, articleLinks]

import {menuType} from './objects/global/menuType'
import {menuLinksType} from './objects/global/menuLinksType'
import {collageType} from './objects/collage'
import {instagramType} from './objects/instagramType'

const objects = [menuType, menuLinksType, collageType, instagramType]

import {homeType} from './singletons/homeType'
import {settingsType} from './singletons/settingsType'
import {evenBetterType} from './singletons/evenBetterType'
const singletons = [homeType, settingsType, evenBetterType]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {pageType} from './documents/page'
const documents = [pageType]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
