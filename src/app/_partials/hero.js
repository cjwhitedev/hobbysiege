import Image from "next/image";
import './../_styles/hero.css'

export default function Hero({imagePath}) {
    if (imagePath) {
        return (
          <div className="hero">
              <Image
                  className="dithered"
                  src={imagePath}
                  alt="example image"
                  width={720}
                  height={240}
              />
          </div>
        );
    }
}