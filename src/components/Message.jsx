export const Message =({value="",msgh2,msgh5,className})=>{
    const myclassname=`${className} text-center`;
    return (<div><h2 className={myclassname}>{msgh2}</h2>
    <h5 className={myclassname}>{msgh5} {value}</h5>
    </div>
    )
}