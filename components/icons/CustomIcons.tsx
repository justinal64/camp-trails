import React from 'react';
import { Bone as Icon } from 'lucide-react-native';
import { withIconAttributes, IconNode } from 'lucide-react-native/dist/cjs/withIconAttributes';

const createIcon = (path: IconNode) => withIconAttributes(Icon, { iconNode: path });

// Custom icon paths for camping-related icons
const shelterPath: IconNode = {
  name: 'Shelter',
  iconNode: [
    ['path', { d: 'M2 20h20', key: 'f5g01c' }],
    ['path', { d: 'M5 20v-4a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4', key: 'ahtprc' }],
    ['path', { d: 'M12 3L3 12h18L12 3z', key: 'p8fkga' }]
  ],
};

const cookingPath: IconNode = {
  name: 'Cooking',
  iconNode: [
    ['path', { d: 'M6 13.87A4 4 0 0 1 7.41 6a5.26 5.26 0 0 1 9.18 0A4 4 0 0 1 18 13.87V21H6V13.87z', key: '14ehs0' }],
    ['path', { d: 'M12 2v1', key: '1cy1fi' }],
    ['path', { d: 'M15.32 10h2a3 3 0 0 0-1.5-2.62l-1.5-1', key: '1pd60p' }],
    ['path', { d: 'M8.68 10h-2a3 3 0 0 1 1.5-2.62l1.5-1', key: '4zvxo' }]
  ],
};

const clothingPath: IconNode = {
  name: 'Clothing',
  iconNode: [
    ['path', { d: 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9', key: '1p9tjy' }],
    ['path', { d: 'M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5', key: 'k7g3l6' }],
    ['path', { d: 'M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z', key: '1irjk1' }],
    ['path', { d: 'M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5', key: 'pz7wn9' }],
    ['path', { d: 'M19.1 4.9C23 8.8 23 15.1 19.1 19', key: '1nspqe' }]
  ],
};

const backpackPath: IconNode = {
  name: 'Backpack',
  iconNode: [
    ['path', { d: 'M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z', key: '15u3e8' }],
    ['path', { d: 'M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2', key: '1plgdj' }],
    ['path', { d: 'M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5', key: 'xtubm6' }],
    ['path', { d: 'M8 10h8', key: '1cpo8w' }],
    ['path', { d: 'M8 18h8', key: '120v4q' }]
  ],
};

const utensilsPath: IconNode = {
  name: 'Utensils',
  iconNode: [
    ['path', { d: 'M11 9H9a1 1 0 0 0-1 1v4c0 1 .6 1 1 1h1', key: '1edvyi' }],
    ['path', { d: 'M15 9h2a1 1 0 0 1 1 1v4c0 1-.6 1-1 1h-1', key: 'kbkn79' }],
    ['path', { d: 'M12 8v8', key: '1vrtph' }],
    ['path', { d: 'M2 2v20', key: '1anmxe' }],
    ['path', { d: 'M22 2v20', key: '1us7e3' }]
  ],
};

export const Shelter = createIcon(shelterPath);
export const Cooking = createIcon(cookingPath);
export const Clothing = createIcon(clothingPath);
export const Backpack = createIcon(backpackPath);
export const Utensils = createIcon(utensilsPath);