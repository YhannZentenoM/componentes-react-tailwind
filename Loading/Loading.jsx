const Loading = () => {
    return (
        <div className='bg-white/40 inset-0 w-full h-screen fixed'>
            <div className='flex items-center justify-center w-full h-full'>
                <img className='w-8 h-8' src='/loading.svg' alt='Loading' />
            </div>
        </div>
    )
}

export default Loading