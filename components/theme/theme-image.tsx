import Image, {ImageProps} from "next/image";


type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
    srcLight: ImageProps["src"];
    srcDark: ImageProps["src"];
}


export const ThemeImage = (props: Props) => {
    const {srcLight, srcDark, ...rest} = props;

    return (
        <>
            <Image {...rest} alt="Logo" src={srcLight} className="imgLight"/>
            <Image {...rest} alt="Logo" src={srcDark} className="imgDark"/>
        </>
    );
}