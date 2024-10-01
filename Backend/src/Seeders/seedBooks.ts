// backend/seeds/seedBooks.ts
import { Book } from '../models/bookModel'; // Adjust the import path as necessary

const seedBooks = async () => {
    try {
        // Hardcoded book data with specified titles
        const books = [
            {
                title: 'Rich Dad Poor Dad',
                author: 'Robert T. Kiyosaki',
                isbn: '9781612680194',
                genre: 'Personal Finance',
                cover_image_url: 'https://covers.openlibrary.org/b/id/8223301-L.jpg',
                available_copies: 5,
                total_copies: 10
            },
            {
                title: 'Think and Grow Rich',
                author: 'Napoleon Hill',
                isbn: '9781588362025',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/7796102-L.jpg',
                available_copies: 3,
                total_copies: 7
            },
            {
                title: 'Wings of Fire',
                author: 'A. P. J. Abdul Kalam',
                isbn: '9788173711466',
                genre: 'Autobiography',
                cover_image_url: 'https://covers.openlibrary.org/b/id/8206870-L.jpg',
                available_copies: 4,
                total_copies: 8
            },
            {
                title: 'Time Management',
                author: 'James W. Mercer',
                isbn: '9781449565293',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/10997327-L.jpg',
                available_copies: 2,
                total_copies: 5
            },
            {
                title: 'Atomic Habits',
                author: 'James Clear',
                isbn: '9780735211292',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/11283105-L.jpg',
                available_copies: 6,
                total_copies: 10
            },
            {
                title: 'Analysis of Mind',
                author: 'John Locke',
                isbn: '9781498051865',
                genre: 'Philosophy',
                cover_image_url: 'https://covers.openlibrary.org/b/id/7964160-L.jpg',
                available_copies: 3,
                total_copies: 5
            },
            {
                title: 'Turning Point',
                author: 'F. W. de Klerk',
                isbn: '9781919920065',
                genre: 'Memoir',
                cover_image_url: 'https://covers.openlibrary.org/b/id/8199934-L.jpg',
                available_copies: 4,
                total_copies: 8
            },
            {
                title: 'Procrastination',
                author: 'Jane B. Burka',
                isbn: '9780738205115',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/8603634-L.jpg',
                available_copies: 2,
                total_copies: 4
            },
            {
                title: 'How to Think',
                author: 'Edward De Bono',
                isbn: '9780140138004',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/5608781-L.jpg',
                available_copies: 5,
                total_copies: 10
            },
            {
                title: 'Eat That Frog',
                author: 'Brian Tracy',
                isbn: '9781626569411',
                genre: 'Self-Help',
                cover_image_url: 'https://covers.openlibrary.org/b/id/7157039-L.jpg',
                available_copies: 3,
                total_copies: 7
            }
        ];

        // Insert dummy data into the database
        await Book.bulkCreate(books);
        console.log('Dummy data for books table inserted successfully.');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
};

// Execute the seeding function
seedBooks();
