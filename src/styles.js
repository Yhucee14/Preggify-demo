const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-black text-[16.5px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    blockCenter: "justify-center items-center",
    blockNormal: "justify-normal items-center",
    sectionGrid: "grid grid-cols-2 gap-4 xx:grid-cols-1 gap-4  sm:grid-cols-2 gap-4 ",
  
    paddingX: "sm:px-3 px-3",
    paddingY: "sm:py-3 py-5",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    Button: "px-2 flex hover:bg-dimBlue hover:text-white hover:border-2 hover:border-black-500 active:bg-black-500 active:text-black  focus:ring focus:ring-black-400 bg-other font-poppins text-white rounded-[22px] border-2 mb-2 border-white-500 py-1.5",
    navBtn: "px-3 flex hover:bg-dimBlue hover:text-white hover:border-2 hover:border-black-500 active:bg-black-500 active:text-black  focus:ring focus:ring-black-400 bg-white font-poppins text-black rounded-[22px] border-2 mb-2 border-lightGreen-500 py-2`"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col leading-[30.8px]`,
  };
  
  export default styles;