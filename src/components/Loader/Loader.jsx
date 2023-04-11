import { ProgressBar } from 'react-loader-spinner'


export default function Loader() {
    return (
        <div>
        <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor='#F4442E'
        barColor='#51E5FF'/>
        </div>)

}