const DynamicButton = ({
    buttonText = "Hover Me", // Button text
    textColor = "text-white", // Text color
    px = "px-6", // Horizontal padding
    py = "py-3", // Vertical padding
}) => {
    return (
        <button className={`relative z-10 ${px} ${py} mt-5 bg-secondary-100 text-white font-semibold rounded-md  overflow-hidden group`}>
            <div className="absolute inset-0 
            
h-[10em] w-[100px]  top-[50px] right-[30%] bg-primaryown group-hover:bg-primaryown group-hover:scale-[800%]
transition-transform duration-1000 z-[-10] transform rotate-[45deg]">

            </div>


            {
                buttonText
            }
        </button>
    );
};

export default DynamicButton;