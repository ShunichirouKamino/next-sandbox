import Link from "next/link";

type Props = {
  alt?: string;
  anker?: string;
  size?: "h-12" | "h-24" | "h-32" | "h-48";
};

const ImageContainer: React.FC<Props> = ({
  alt = "no-image",
  anker = undefined,
  size = "h-24",
}): JSX.Element => {
  return (
    <>
      {!anker ? (
        <div>
          <img
            className={`${size}` + " object-contain w-full"}
            src="/images/profile.png"
            alt={alt}
          />
        </div>
      ) : (
        <Link href={anker}>
          <a className="bg-center">
            <div>
              <img
                className={`${size}` + "object-contain  w-full"}
                src="/images/profile.png"
                alt={alt}
              />
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default ImageContainer;
