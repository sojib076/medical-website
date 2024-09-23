
interface DynamicBannerProps {
  title: string;
  subText: string;
  highlightText: string;
}

export const DynamicBanner = ({ title, subText, highlightText }: DynamicBannerProps) => {
    return (
      <div
        className="lg:h-[400px] py-10"
        style={{
          backgroundImage: `url('https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/banner.jpg')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex items-center justify-center lg:h-[380px] lg:py-14 text-center text-white">
          <div>
            <h1 className="font-bold lg:text-4xl text-2xl ">{title}</h1>
            <p>
              {subText} //{' '}
              <span className="text-secondary-100 font-medium">{highlightText}</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  