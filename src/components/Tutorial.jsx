const format1 = [
  {
    header: 'O Holy Night Chorus',
    blurb: 'Click to learn the strategy, then put the sections together.',
    options: ['Fall on Your Knees...', 'O Night Divine...', 'Both Sections Together'],
    links: ['knees', 'night', 'both']
  },
  {
    header: 'Fall On Your Knees',
    blurb: 'Give each part a memorable name. Use that name to remember what to sing.',
    options: ['Tune', 'Shadow', 'Glide', 'Elastic'],
    links: ['tune1', 'shadow', 'glide', 'elastic']
  },
  {
    header: 'O Night Divine',
    blurb: 'Give each part a memorable name. Use that name to remember what to sing.',
    options: ['Tune', 'Early Slinky', 'Circle then Slinky', 'Bells'],
    links: ['tune2', 'early', 'circle', 'bells']
  },
  {
    header: 'Both Sections Together',
    blurb: 'Once you have practised the strategy, try out your own vocal part.',
    options: ['Soprano', 'Alto', 'Tenor', 'Bass'],
    links: ['soprano', 'alto', 'tenor', 'bass']
  }
]

const format2 = [
  {
    header: 'Tune',
    blurb: 'We already know the tune.',
    image: '',
    choruses: ['Soprano', 'Soprano', 'Tenor'],
    audio: [],
    memoryTip: ''
  },
  {
    header: 'Shadow',
    blurb:"'Shadows' the Tune",
    image: '',
    choruses: ['Alto', 'Bass', 'Bass'],
    audio: [],
    memoryTip: 'Memory tip: Shadow starts one note higher than the note you just sang.'
  },
  {
    header: 'Glide',
    blurb: "Has long notes that 'glide",
    image: '',
    choruses: ['Tenor', 'Alto', 'Soprano'],
    audio: [],
    memoryTip: 'Memory tip: Glide starts one note lower than the note you just sang.'
  },
  {
    header: 'Elastic',
    blurb: 'Pulls away but always returns',
    image: '',
    choruses: ['Bass', 'Tenor', 'Alto'],
    audio: [],
    memoryTip: 'Memory tip: Elastic starts on the same note as the one you just sang.'
  },
  {
    header: 'Tune',
    blurb: 'We already know the tune',
    image: '',
    choruses: ['Soprano', 'Soprano', 'Soprano'],
    audio: [],
    memoryTip: ''
  },
  {
    header: 'Early Slinky',
    blurb: "Creates up the -'vine' early on",
    image: '',
    choruses: ['Alto', 'Alto', 'Tenor'],
    audio: [],
    memoryTip: "Memory tip: Tenors, beware the 'double slinky' - in chorus 3, the slinky comes twice."
  },
  {
    header: 'Circle then Slinky',
    blurb: "Circles around the first '-vine' and creeps up the second",
    image: '',
    choruses: ['Tenor', 'Tenor', 'Bass'],
    audio: [],
    memoryTip: "Circles around the first '-vine' and creeps up the second."
  },
  {
    header: 'Bells',
    blurb: 'Sound like bells (ding dong)',
    image: '',
    choruses: ['Bass', 'Bass', 'Alto'],
    audio: [],
    memoryTip: 'Memory tip: Altos, at the end of chorus 3, go back to shadowing the tune.'
  }
]

const format3 = [
  {
    header: 'Soprano',
    chorus1Text: ['Tune', 'Tune'],
    chorus2Text: ['Tune', 'Tune'],
    chorus3Text: ['Glide', 'Tune'],
    audio: []
  },
  {
    header: 'Alto',
    chorus1Text: ['Shadow', 'Early Slinky'],
    chorus2Text: ['Glide', 'Early Slinky'],
    chorus3Text: ['Elastic', 'Bells'],
    audio: []
  },
  {
    header: 'Tenor',
    chorus1Text: ['Glide', 'Circle then Slinky'],
    chorus2Text: ['Elastic', 'Circle then Slinky'],
    chorus3Text: ['Tune', 'Double Slinky'],
    audio: []
  },
  {
    header: 'Bass',
    chorus1Text: ['Elastic', 'Bells'],
    chorus2Text: ['Shadow', 'Bells'],
    chorus3Text: ['Shadow', 'Circle then normal'],
    audio: []
  }
]