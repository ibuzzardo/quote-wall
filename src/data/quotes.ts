export enum Category {
  MOTIVATION = 'Motivation',
  WISDOM = 'Wisdom',
  HUMOR = 'Humor',
  LIFE = 'Life',
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: Category;
}

export const quotes: Quote[] = [
  {
    id: '1',
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    category: Category.MOTIVATION,
  },
  {
    id: '2',
    text: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'John Lennon',
    category: Category.LIFE,
  },
  {
    id: '3',
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    category: Category.MOTIVATION,
  },
  {
    id: '4',
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    category: Category.WISDOM,
  },
  {
    id: '5',
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
    category: Category.MOTIVATION,
  },
  {
    id: '6',
    text: 'Don\'t let yesterday take up too much of today.',
    author: 'Will Rogers',
    category: Category.LIFE,
  },
  {
    id: '7',
    text: 'You learn more from failure than from success. Don\'t let it stop you. Failure builds character.',
    author: 'Unknown',
    category: Category.WISDOM,
  },
  {
    id: '8',
    text: 'It\'s not whether you get knocked down, it\'s whether you get up.',
    author: 'Vince Lombardi',
    category: Category.MOTIVATION,
  },
  {
    id: '9',
    text: 'If you are working on something that you really care about, you don\'t have to be pushed. The vision pulls you.',
    author: 'Steve Jobs',
    category: Category.MOTIVATION,
  },
  {
    id: '10',
    text: 'People who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Rob Siltanen',
    category: Category.MOTIVATION,
  },
  {
    id: '11',
    text: 'Failure will never overtake me if my determination to succeed is strong enough.',
    author: 'Og Mandino',
    category: Category.MOTIVATION,
  },
  {
    id: '12',
    text: 'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That\'s the classic entrepreneur.',
    author: 'Mohnish Pabrai',
    category: Category.WISDOM,
  },
  {
    id: '13',
    text: 'We don\'t make mistakes, just happy little accidents.',
    author: 'Bob Ross',
    category: Category.HUMOR,
  },
  {
    id: '14',
    text: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein',
    category: Category.WISDOM,
  },
  {
    id: '15',
    text: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins',
    category: Category.MOTIVATION,
  },
  {
    id: '16',
    text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr.',
    category: Category.WISDOM,
  },
  {
    id: '17',
    text: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
    category: Category.LIFE,
  },
  {
    id: '18',
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
    category: Category.LIFE,
  },
  {
    id: '19',
    text: 'May you live all the days of your life.',
    author: 'Jonathan Swift',
    category: Category.LIFE,
  },
  {
    id: '20',
    text: 'Life is a succession of lessons which must be lived to be understood.',
    author: 'Helen Keller',
    category: Category.LIFE,
  },
  {
    id: '21',
    text: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
    category: Category.WISDOM,
  },
  {
    id: '22',
    text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    author: 'Thomas A. Edison',
    category: Category.HUMOR,
  },
  {
    id: '23',
    text: 'A day without laughter is a day wasted.',
    author: 'Charlie Chaplin',
    category: Category.HUMOR,
  },
  {
    id: '24',
    text: 'You miss 100% of the shots you don\'t take.',
    author: 'Wayne Gretzky',
    category: Category.MOTIVATION,
  },
  {
    id: '25',
    text: 'Whether you think you can or you think you can\'t, you\'re right.',
    author: 'Henry Ford',
    category: Category.MOTIVATION,
  },
];