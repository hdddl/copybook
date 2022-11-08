import React from 'react'
import ReactDOM from 'react-dom/client'

const redColorStyle = {
    color : "rgba(0, 0, 0, 0)"
}


// 表示田字格(index, value)
class Rows extends React.Component{
    render(){
        return (
            <div>
                <svg version="1.1" width={1000}>
                    {(()=>{
                        let blocks = []
                        for(let i = 0; i < this.props.value.length; i++){
                            blocks.push(<rect x={i*100} y={0} width={100} height={100} rx={0} ry={0} fill="none" stroke="#ff0000" style={redColorStyle}></rect>)
                            blocks.push(<path fill="none" stroke="#ff0000" d={"M" + 100*i + "," +"0L" + 100*(i+1) + ",100"} style={redColorStyle}></path>)
                            blocks.push(<path fill="none" stroke="#ff0000" d={"M" + 100*i + "," + "50L" + 100*(i+1) + ",50"} style={redColorStyle}></path>)
                            blocks.push(<path fill="none" stroke="#ff0000" d={"M" + 100*(i+1) + "," + "0L" + i*100 + ",100"} style={redColorStyle}></path>)
                            blocks.push(<path fill="none" stroke="#ff0000" d={"M" + 50*(i+1) + "," + "0L" + 50*(i+1) + ",100"} style={redColorStyle}></path>)
                            blocks.push(
                                <text x={50 + i*100} y={47} textAnchor="middle"
                                      fontFamily="STKaiti" fontSize="90px"
                                      stroke="none" fill="#000000"
                                      style={redColorStyle}
                                >
                                    <tspan dy="31.25">{this.props.value[i]}</tspan>
                                </text>
                            )
                        }
                        return blocks
                    })()}
                </svg>
            </div>
        )
    }
}

class App extends React.Component{
    render() {
        return(
            <div>
                <h1>书法字帖生成</h1>
                <Rows value={"1234567912345888888"}/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
