export default function H2({children, className=""})
{
  return(
    <h2 className={`${className} font-roboto text-xl leading-6`}>
      {children}
    </h2>
  )
}