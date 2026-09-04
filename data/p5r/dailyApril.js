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
    ],
  },
  {
    date: '04/13-4/17',
    dayOfWeek: 'Wed-Sun',
    summary: 'Still mainly just following the story and very limited in what you can do, but there is a few things you can do these days.',
    day: [
      {
        id: '0415-d1',
        type: 'tips',
        label: 'On 4/15 you should returning to the palace for the third time, capture 1 of every Persona you encouter.',
      },
      {
        id: '0415-d2',
        type: 'confidant',
        arcana: 'Lovers',
        targetRank: 1,
      },
      {
        id: '0415-d3',
        type: 'confidant',
        arcana: 'Magician',
        targetRank: 1,
      },
    ],
    night: [
    ],
  },
  {
    date: '04/18',
    dayOfWeek: 'Mon',
    summary: 'We can finally start to do some things starting today!',
    day: [
      {
        id: '0418-d1',
        type: 'action',
        label: 'Borrow a book from the School Library',
      },
      {
        id: '0418-d2',
        type: 'shopping',
        label: 'Buy SP recovery drinks from Vending Machines',
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
    ],
  },
  {
    date: '04/19',
    dayOfWeek: 'Tue',
    day: [
      {
        id: '0419-d1',
        type: 'classroom',
        answer: 'They’re the same',
        statReward: { knowledge: 1 },
      },
    ],
    night: [
      {
        id: '0419-n1',
        type: 'plant',
        label: 'Use the Bio Nutrient on plant',
        statReward: { kindness: 2 },
      },
    ],
  },
  {
    date: '04/20',
    dayOfWeek: 'Wed',
    summary: 'Sometimes you will secure a seat on the train! Make sure to have a book for when that happens!',
    day: [
      {
        id: '0420-d1',
        type: 'train',
        label: 'Read a book',
      },
      {
        id: '0420-d2',
        type: 'action',
        label: 'Borrow a book from the School Library',
      },
      {
        id: '0420-d3',
        type: 'study',
        label: 'On raining days you will get more Knowledge from studying today is one of those days, you can study in the Library for +3 Knowledge',
        statReward: { knowledge: 3 },
      },
    ],
    night: [
      {
        id: '0420-n1',
        type: 'study',
        label: 'It is still raining so you can study at LeBlanc again for more knowledge',
        statReward: { knowledge: 3 },
      },
    ],
  },
  {
    date: '04/21',
    dayOfWeek: 'Thu',
    summary: 'From here out I will just mark raniy days as optional studying as P5R gives a lot of extra time do fully complete everything.',
    day: [
      {
        id: '0421-d1',
        type: 'shopping',
        label: 'Buy the DVD Player from Jaya Backstreets',
      },
      {
        id: '0421-d2',
        type: 'action',
        label: 'Go to Shibuya Central Street and buy an annual subscription to the DVD Rental Shop and rent a DVD',
      },
      {
        id: '0421-d3',
        type: 'study',
        label: 'Optional rainy study day',
        statReward: { knowledge: 3 },
      },
    ],
    night: [
      {
        id: '0421-n1',
        type: 'dvd',
        label: 'Watch the DVD in your room',
      },
    ],
  },
  {
    date: '04/22',
    dayOfWeek: 'Fri',
    summary: 'The school store sells Yakisoba every Friday',
    day: [
      {
        id: '0422-d1',
        type: 'shopping',
        label: 'Buy Yakisoba from the school store',
      },
    ],
    night: [
    ],
  },
  {
    date: '04/23',
    dayOfWeek: 'Sat',
    day: [
      {
        id: '0423-d1',
        type: 'classroom',
        answer: 'All of them',
        statReward: { knowledge: 1 },
      },
      {
        id: '0423-d2',
        type: 'confidant',
        arcana: 'Death',
        name: 'Takemi',
        targetRank: 2,
        matchingPersonaRequired: false,
        dialogue: [{ choice: '"I have a bad heart"', points: 1 }, { choice: '"I agree"', points: 1 }, { choice: '"I am totally fine"', points: 1 }],
        statReward: { guts: 1 },
      },
    ],
    night: [
    ],
  },
  {
    date: '04/24',
    dayOfWeek: 'Sun',
    summary: 'You should be forced into a meeting with the team but you can just exit so you can go an do these things. You can only by drinks on Sundays so make sure not to miss a day as they give you stat points!',
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
        label: 'Fast travel back to the Hideout so you can infiltrate the palace. Make sure you finish the whole Palace this time. Also make sure to collect all the Will Seeds',
      },
      {
        id: '0424-d3',
        type: 'confidant',
        arcana: 'Fool',
        targetRank: 2,
      },
    ],
    night: [
      {
        id: '0424-n1',
        type: 'shopping',
        label: 'Buy Share of Spring Set from TV',
      },
      {
        id: '0424-n2',
        type: 'confidant',
        arcana: 'Hierophant',
        targetRank: 1,
        dialogue: [{ choice: '"Got it"', points: 3 }],
      },
    ],
  },
  {
    date: '04/25',
    dayOfWeek: 'Mon',
    day: [
      {
        id: '0425-d1',
        type: 'book',
        label: 'Read book on the train',
      },
      {
        id: '0425-d2',
        type: 'question',
        answer: '(You unquestionably support it) -> (You have a duty to correct it)',
        statReward: {charm:1, lovers:2},
      },
      {
        id: '0425-d3',
        type: 'calling',
        label: 'Send the calling card',
      },
    ],
    night: [
    ],
  },
  {
    date: '04/26',
    dayOfWeek: 'Tue',
    day: [
      {
        id: '0426-d1',
        type: 'heart',
        label: 'Steal Kamoshias Heart',
      },
      {
        id: '0426-d2',
        type: 'confidant',
        arcana: 'Magician',
        targetRank: 2,
      },
    ],
    night: [
    ],
  },
  {
    date: '04/27',
    dayOfWeek: 'Wed',
    day: [
      {
        id: '0427-d1',
        type: 'classroom',
        answer: 'Four Color Theorem',
        statReward: {knowledge:1},
      },
      {
        id: '0427-d2',
        type: 'confidant',
        arcana: 'Death',
        name: 'Takemi',
        targetRank: 3,
        matchingPersonaRequired: true,
        dialogue: [{ choice: '"I don’t mind "', points: 2 }, { choice: '"Of course not"', points: 2 }],
        statReward: { guts: 1 },
      },
    ],
    night: [
      {
        id: '0427-n1',
        type: 'crossword',
        answer: 'Blossom',
        statReward: { knowledge: 1 },
      },
    ],
  },
  {
    date: '04/28-04/29',
    dayOfWeek: 'Thu-Fri',
    summary: 'Since P5R gives you so much extra time the guide isnt super strict on when you need to do what and for these 2 days here are some optional stuff you can choose to do, But remember take you time!',
    day: [
      {
        id: '0428-0429-d1',
        label: 'Watch and/or possilbe rent a new DVD',
      },
      {
        id: '0428-0429-d2',
        label: 'If you have finished you book from the school library then borrow a new book',
      },
      {
        id: '0428-0429-d3',
        label: 'Study in the Library',
      },
      {
        id: '0428-0429-d4',
        label: 'Watch a movie at the Theater',
      },
    ],
    night: [
      {
        id: '0428-0429-n1',
        label: 'Read at LeBlanc',
      },
      {
        id: '0428-0429-n2',
        label: 'Watch a DVD',
      },
      {
        id: '0428-0429-n3',
        label: 'Study',
      },
    ],
  },
  {
    date: '04/30',
    dayOfWeek: 'Sat',
    day: [
      {
        id: '0430-d1',
        type: 'metro',
        label: 'Read a book on the metro',
      },
      {
        id: '0427-d2',
        type: 'confidant',
        arcana: 'Death',
        name: 'Takemi',
        targetRank: 4,
        matchingPersonaRequired: true,
        dialogue: [{ choice: '"Dr. Takemi will help  "', points: 2 }, { choice: '"You seem happy "', points: 3 }, { choice: '"I’ll reflect on my mistakes "', points: 2 }],
        statReward: { guts: 1 },
      },
    ],
    night: [
    ],
  },





];