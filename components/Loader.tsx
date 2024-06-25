import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/loader.gif'
      alt='loader'
      width={200}
      height={200}
      className='object-contain'
    />
    <p className='text-sm font-bold text-primary-grey-300'>Setting Up Your Board...</p>
  </div>
);

export default Loader;
