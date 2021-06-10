import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="../public/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="ruofan wei"
  />
)