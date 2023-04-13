import { Blocks } from 'react-loader-spinner'


export default function Loader() {
    return (
        <div style={{margin: "auto", width: 100}}>
        <Blocks
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'/>
        </div>    
        )

}