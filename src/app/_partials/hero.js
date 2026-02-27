import Image from "next/image";
import './../_styles/hero.css'

export default function Hero({imagePath}) {
  return (
        <div className="hero">
                <Image
                    className="dithered"
                    src={imagePath}
                    alt="example image"
                    width={600}
                    height={600}
                />
            </div>
  );
}