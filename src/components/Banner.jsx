import Button from "./Button";

const Banner = () => {
    return (
        <section className="bg-dark-01/5 rounded-3xl text-gray-100">
            <div className="flex flex-col justify-center items-center p-6 mx-auto lg:px-32 sm:py-12 lg:py-24 md:flex-row lg:justify-between gap-y-12 md:gap-20">
                <div className="space-y-6 lg:space-y-12 text-center md:text-left">
                    <h1 className="text-3xl lg:text-[56px] font-bold leading-10 lg:leading-[84px] font-playfair_display">Books to freshen up <br /> your bookshelf
                    </h1>
                    <Button url={'/listed-books'} label={'View The List'} styles="bg-green-01 btn-md w-44 hover:bg-green-01/80 text-white" />
                </div>
                <div className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://img.freepik.com/free-photo/bookshelf-with-plant-hat_23-2148882787.jpg?t=st=1711466773~exp=1711470373~hmac=489b8442d2bdb389a624365c19ef280e11cfe93a1cc97d33fa9e63d1be957491&w=740" alt="banner-image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;