interface IProps {
    title:string,
    child: React.ReactNode
}
export const Section = ({title, child}:IProps) => {
  return (
    <section className="p-2">
        <h1>{title}</h1>
        <div>{child}</div>
    </section>
  )
}
