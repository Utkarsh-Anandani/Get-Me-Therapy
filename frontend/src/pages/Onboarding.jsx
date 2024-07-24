import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Onboarding = ({popup}) => {

  const [slide, setslide] = useState(1);

  const handleNext = () => {
    if (slide === 3) setslide(1);
    else setslide(slide + 1);
  }

  return (
    <div id='background' className={slide === 1 ? 'bg-url1 h-full w-full bg-center bg-no-repeat bg-cover transform relative z-0 overflow-hidden' : slide === 2 ? 'bg-url2 h-full w-full bg-center bg-no-repeat bg-cover relative transform overflow-hidden' : slide === 3 ? 'bg-url3 h-full w-full bg-center bg-no-repeat bg-cover relative transform overflow-hidden' : ''}>
      <div className='absolute w-[84%] h-[50vh] bottom-[4%] bg-[#FE8C00] left-[8%] right-[8%] rounded-[2.9rem] text-center py-8 px-6 flex flex-col items-center gap-4'>
        <h1 className='font-semibold text-4xl text-white mb-0'>We serve incomparable delicacies</h1>
        <p>All the best restaurants with their top menu waiting for you, they cant&apos;t wait for your order!!</p>
        <div className='flex gap-2'>
          <img className={slide === 1 ? 'h-[5px] w-[25px] act' : 'h-[5px] w-[25px] deact'} src="../assets/Rectangle.svg" alt="" />
          <img className={slide === 2 ? 'h-[5px] w-[25px] act' : 'h-[5px] w-[25px] deact'} src="../assets/Rectangle.svg" alt="" />
          <img className={slide === 3 ? 'h-[5px] w-[25px] act' : 'h-[5px] w-[25px] deact'} src="../assets/Rectangle.svg" alt="" />
        </div>
        {slide === 3 ? <div className='mt-4'>
          <Link to={'/login'}>
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="17" y="17" width="62" height="62" rx="31" fill="white" />
              <path d="M40 47.7257C40 47.346 40.2821 47.0322 40.6482 46.9825L40.75 46.9757L53.934 46.9763L49.171 42.2327C48.8775 41.9405 48.8764 41.4656 49.1687 41.1721C49.4344 40.9052 49.851 40.8801 50.1451 41.0974L50.2294 41.1698L56.2794 47.1938C56.318 47.2323 56.3517 47.274 56.3802 47.318C56.3882 47.3313 56.3964 47.3448 56.4042 47.3587C56.4114 47.3705 56.4178 47.3828 56.4239 47.3953C56.4324 47.4134 56.4407 47.4321 56.4482 47.4512C56.4543 47.4659 56.4594 47.4802 56.464 47.4947C56.4695 47.5126 56.4749 47.5316 56.4795 47.551C56.483 47.5645 56.4857 47.5775 56.488 47.5906C56.4914 47.61 56.4942 47.6301 56.4962 47.6505C56.498 47.666 56.499 47.6814 56.4996 47.6967C56.4998 47.7061 56.5 47.7158 56.5 47.7257L56.4996 47.7547C56.499 47.7694 56.498 47.7841 56.4966 47.7988L56.5 47.7257C56.5 47.773 56.4956 47.8193 56.4872 47.8642C56.4853 47.8749 56.4829 47.8859 56.4804 47.8969C56.475 47.9195 56.4689 47.9412 56.4618 47.9625C56.4583 47.9731 56.4543 47.9844 56.4499 47.9957C56.4412 48.0182 56.4316 48.0397 56.4212 48.0607C56.4163 48.0705 56.4108 48.0809 56.4051 48.0911C56.3958 48.1077 56.3861 48.1236 56.3759 48.139C56.3687 48.1499 56.3607 48.1613 56.3524 48.1725L56.3459 48.1811C56.3257 48.2075 56.3038 48.2325 56.2803 48.256L56.2794 48.2567L50.2294 54.2817C49.9359 54.574 49.461 54.573 49.1687 54.2795C48.903 54.0127 48.8797 53.596 49.0981 53.3028L49.1709 53.2188L53.932 48.4763L40.75 48.4757C40.3358 48.4757 40 48.1399 40 47.7257Z" fill="#FE8C00" />
              <circle opacity="0.08" cx="48" cy="48" r="47" stroke="white" strokeWidth="2" />
              <path d="M1 48C1 73.9574 22.0426 95 48 95C73.9574 95 95 73.9574 95 48C95 22.0426 73.9574 1 48 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
          : <div className='w-full flex items-center justify-between text-lg mt-20'>
            <div><Link to={'/login'} className='text-white cursor-pointer hover:underline hover:text-white ' onClick={handleNext}>Skip</Link></div>
            <div>
              <a className='text-white cursor-pointer hover:underline hover:text-white flex items-center' onClick={handleNext}>
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>}
      </div>
      <div className={popup?'pop absolute min-h-[60vh] w-full z-10 bottom-0 transition-all ease-in-out bg-white rounded-t-[2rem]':'pop absolute min-h-[60vh] w-full z-10 bottom-[-70vh] bg-white rounded-t-[2rem] transition-all ease-in-out'}>
        <img className='h-[5px] w-[55px] bg-gray-400 mx-auto mt-3' src="../assets/Rectangle.svg" alt="" />
        <svg className='mx-auto mt-[4.25rem] mb-5' width="207" height="168" viewBox="0 0 207 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.1" cx="104.189" cy="106" r="62" fill="#FE8C00" />
          <circle cx="35.1891" cy="59" r="4" fill="#B468FF" />
          <circle cx="110.689" cy="15.5" r="8.5" fill="#B468FF" />
          <circle cx="187.189" cy="95" r="8" fill="#FE8C00" />
          <path d="M152.189 5L154.271 10.9183L160.189 13L154.271 15.0817L152.189 21L150.107 15.0817L144.189 13L150.107 10.9183L152.189 5Z" fill="#FB46FF" />
          <path d="M28.8425 78.5306C28.8425 78.5306 27.1961 85.177 19.3985 85.4631C14.2001 85.6539 12.9772 80.2666 6.90458 83.9134C4.20019 85.5374 2.18909 90.4719 2.18909 90.4719" stroke="#FB46FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M31.6891 117L34.5773 124.612L42.1891 127.5L34.5773 130.388L31.6891 138L28.8009 130.388L21.1891 127.5L28.8009 124.612L31.6891 117Z" fill="#FE8C00" />
          <circle cx="101.189" cy="3" r="2" fill="#FB46FF" />
          <path d="M38.5133 3.76226C39.4964 12.3082 59.3559 20.8261 59.7984 13.8343C60.4996 2.75464 33.7161 11.3933 70.2565 25.9123" stroke="#FE8C00" strokeWidth="3" strokeLinecap="round" />
          <path d="M185.189 133.81C190.153 133.106 200.977 134.293 204.559 144.676" stroke="#B468FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M180.268 37.3673C180.268 37.3673 187.527 41.06 190.569 37.7505C193.344 34.7316 190.135 30.02 193.492 27.6657C196.224 25.75 202.011 27.0118 202.011 27.0118" stroke="#FE8C00" strokeWidth="3" strokeLinecap="round" />
          <rect x="177.189" y="74" width="7" height="7" rx="2" fill="#FE8C00" />
          <path d="M96.5354 63.4998C101.436 61.4699 106.942 61.4699 111.843 63.4998L128.829 70.5359C133.73 72.5658 137.623 76.4592 139.653 81.3598L146.689 98.3463C148.719 103.247 148.719 108.753 146.689 113.654L139.653 130.64C137.623 135.541 133.73 139.434 128.829 141.464L111.843 148.5C106.942 150.53 101.436 150.53 96.5354 148.5L79.5489 141.464C74.6483 139.434 70.7548 135.541 68.725 130.64L61.6889 113.654C59.659 108.753 59.659 103.247 61.6889 98.3463L68.725 81.3598C70.7548 76.4592 74.6483 72.5658 79.5489 70.5359L96.5354 63.4998Z" fill="#F5F5FF" stroke="#FE8C00" strokeWidth="8" />
          <path fillRule="evenodd" clipRule="evenodd" d="M116.069 93.88C116.629 93.3251 117.385 93.0128 118.173 93.0106C118.961 93.0085 119.719 93.3166 120.281 93.8684C120.844 94.4202 121.167 95.1714 121.181 95.9595C121.194 96.7476 120.897 97.5093 120.353 98.08L104.385 118.04C104.111 118.336 103.78 118.573 103.411 118.737C103.043 118.902 102.646 118.991 102.242 118.998C101.839 119.006 101.438 118.932 101.064 118.781C100.69 118.63 100.35 118.405 100.065 118.12L89.4852 107.536C89.1905 107.261 88.9541 106.93 88.7901 106.562C88.6261 106.194 88.538 105.797 88.5309 105.394C88.5238 104.991 88.5979 104.591 88.7487 104.218C88.8996 103.844 89.1242 103.505 89.4091 103.22C89.694 102.935 90.0333 102.71 90.4068 102.56C90.7804 102.409 91.1805 102.335 91.5833 102.342C91.9861 102.349 92.3834 102.437 92.7514 102.601C93.1194 102.765 93.4506 103.001 93.7252 103.296L102.101 111.668L115.993 93.968C116.018 93.937 116.045 93.9076 116.073 93.88H116.069Z" fill="#FE8C00" />
        </svg>
        <h1 className='text-black text-3xl font-semibold mb-6'>Login Successful</h1>
        <Link className='flex items-center justify-center mb-6' to={'/tracking'}><button className='bg-[#FE8C00] block text-white text-lg font-semibold w-[70vw] py-3 rounded-full'>Go to Tracking Screen</button></Link>
        <Link to={'/login'}><button className='text-xl text-gray-600'>Logout</button></Link>
      </div>
    </div>
  )
}

export default Onboarding
