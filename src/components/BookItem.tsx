import { Book } from '@/interfaces'
import Link from 'next/link'
import { AiFillDollarCircle } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'

const BookItem = ({ book }: { book: Book }) => {
  const {
    _id,
    author_name,
    book_name,
    book_language,
    book_publisher,
    book_price,
    book_type,
    entry_date,
  } = book
  return (
    <Link
      href={`/books/${_id}`}
      className='flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'
    >
      <div className='flex items-center justify-center w-12 bg-blue-500'>
        <FaBook />
      </div>
      <div className='px-4 pr-12 py-2 flex justify-between items-center w-full -mx-3'>
        <div className='mx-3'>
          <span className='font-semibold text-red-500 dark:text-blue-400'>
            {book_name}
          </span>
          <p className='text-sm text-gray-600 dark:text-gray-200'>
            {author_name}
          </p>
        </div>
        <div className='text-white flex gap-1 items-center'>
          <div>
            <AiFillDollarCircle />
          </div>
          <p>{book_price}</p>
        </div>
      </div>
    </Link>
  )
}
export default BookItem