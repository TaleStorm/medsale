export default function H1({children, className=""})
{
  return(
    <h1 className={`${className} font-roboto text-2xl leading-7 font-bold`}>
      {children}
    </h1>
  )
}