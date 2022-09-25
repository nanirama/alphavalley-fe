import Image from 'next/image'

export default function ImgLoader(props) {
  return <Image
          {...props}
          itemProp="image"
          alt={props.alt ? props.alt : 'AlphaValley'}
           />
}