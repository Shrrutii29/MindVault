import logo from '../../assets/notes_icon.jpeg';

export const Navbar = () => {
    return (
        <header className='flex px-5 py-2 gap-3 border-b-2 border-grey-100'>
            <div className='w-15 h-15'>
                <img className='w-full h-full' src={logo} alt="notes logo" />
            </div>
            <h1 className='text-brown-500 text-4xl
font-bold py-2'>MindVault</h1>
        </header>
    )
}