import BookForm from './BookForm'
import Buttons from './Buttons'
import Library from './Library'

const LibraryContainer = () => {
  return (
    <div className='h-[40rem] w-[60rem] shadow-md rounded-md p-10'>
      <h1 className='text-3xl font-bold'>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className='flex justify-between'>
        <BookForm />
        <div>
          <Library />
        </div>
      </div>
    </div>
  )
}
export default LibraryContainer