/* 
  EXAMPLE FOR EASY COPY PASTE


  {
    date: '',
    dayOfWeek: '',
    summary: '',
    day: [
      {
        id: '0418-d1',
        type: '',
        label: '',
      },
      {
        id: '',
        type: 'classroom',
        question: 'Is the line real?',
        answer: 'They’re the same',
        statReward: { knowledge: 1 },
      },
      {
        id: '',
        type: '',
        label: '',
      },
      {
        id: '',
        type: 'confidant',
        arcana: '',
        name: '',
        targetRank: ,
        matchingPersonaRequired: ,
        dialogue: [{ choice: '" "', points: }],
        statReward: { guts: 1 },
      },
    ],
    night: [
      {
        id: '0418-n1',
        type: 'crossword',
        answer: 'Semesters',
        statReward: { knowledge: 1 },
      },
      {
        id: '',
        type: '',
        label: '',
      },
    ],
  },

*/

export const aprilGuide = [
    {
    date: '04/09-04/11',
    dayOfWeek: 'Sat-Mon',
    summary: 'Welcome to the P5R day to day guide! Hope you enjoy! This is a very strict month as there is not much we can do around this time so I will try to group days together where you cannot do things.',
    day: [
      {
        id: '0409-04011-d1',
        type: 'story',
        label: 'Just follow the games tutorial for now till 04/12',
      },
    ],
    night: [
      {
      },
    ],
  },
  {
    date: '04/12',
    dayOfWeek: 'Tue',
    summary: 'Still not much you can do. Today is the first classroom question but mainly follow the tutorial still',
    day: [
      {
        id: '0412-d1',
        type: 'classroom',
        answer: 'Villains',
        statReward: { knowledge: 1 },
      },
      {
        id: '0412-d2',
        type: 'confidant',
        arcana: 'Chariot',
        targetRank: 1,
      },
      {
        id: '0412-d3',
        type: 'confidant',
        arcana: 'Fool',
        targetRank: 1,
      },
    ],
    night: [
      {
      },
    ],
  },
  {
    date: '04/18',
    dayOfWeek: 'Mon',
    summary: 'Borrow library book, stock up on SP items, and start Takemi Confidant.',
    day: [
      {
        id: '0418-d1',
        type: 'action',
        label: 'Borrow "The Great Thief" from the School Library (3F)',
      },
      {
        id: '0418-d2',
        type: 'shopping',
        label: 'Buy SP recovery drinks (Arginade/Water of Rebirth) from Vending Machines',
        location: 'Courtyard, Arcade, Bathhouse',
      },
      {
        id: '0418-d3',
        type: 'shopping',
        label: 'Buy Bio Nutrient (1x) from Underground Mall Flower Shop',
      },
      {
        id: '0418-d4',
        type: 'confidant',
        arcana: 'Death',
        name: 'Takemi',
        targetRank: 1,
        matchingPersonaRequired: false,
        dialogue: [{ choice: '"Please go easy on me"', points: 3 }],
        statReward: { guts: 1 },
      },
    ],
    night: [
      {
        id: '0418-n1',
        type: 'crossword',
        answer: 'Semesters',
        statReward: { knowledge: 1 },
      },
      {
        id: '0418-n2',
        type: 'action',
        label: 'Clean room junk floor to collect books & CRT TV',
      },
    ],
  },
  {
    date: '04/19',
    dayOfWeek: 'Tue',
    day: [
      {
        id: '0419-d1',
        type: 'classroom',
        question: 'Is the line real?',
        answer: 'They’re the same',
        statReward: { knowledge: 1 },
      },
      {
        id: '0419-d2',
        type: 'study',
        location: 'Library Study Booth',
        statReward: { knowledge: 1, guts: 1 },
      },
    ],
    night: [
      {
        id: '0419-n1',
        type: 'plant',
        itemUsed: 'Bio Nutrient',
        statReward: { kindness: 2 },
      },
      {
        id: '0419-n2',
        type: 'reading',
        book: 'The Great Thief',
      },
    ],
  },
  {
    date: '04/24',
    dayOfWeek: 'Sun',
    weather: 'Clear',
    day: [
      {
        id: '0424-d1',
        type: 'drink',
        label: 'Buy Sunday Drink in Underground Walkway',
        statReward: { charm: 1 },
      },
      {
        id: '0424-d2',
        type: 'palace',
        label: 'Infiltrate Castle (Secure Route & Get 3 Will Seeds)',
        targetLevel: 9,
        targetYen: 20000,
        requiredFusions: [
          { result: 'Agathion', recipe: 'Arsene + Pixie' },
          { result: 'Berith', recipe: 'Silky + Agathion' },
        ],
      },
    ],
    night: [
      {
        id: '0424-n1',
        type: 'tv_shopping',
        recommended: 'Share of Spring Set',
      },
      {
        id: '0424-n2',
        type: 'confidant',
        arcana: 'Hierophant',
        name: 'Sojiro',
        targetRank: 1,
        dialogue: [{ choice: '"Got it"', points: 3 }],
      },
    ],
  },
];