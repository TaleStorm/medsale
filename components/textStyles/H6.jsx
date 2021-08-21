export default function  H6({children, className=""})
{
  return(
    <h6 className={`${className} text-warm-gray font-roboto text-xs leading-4`}>
      {children}
    </h6>
  )
}