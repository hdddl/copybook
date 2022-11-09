import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



// 表示田字格(index, i)
class Rows extends React.Component{
    render(){
        return (
            <div>
                <svg version="1.1" width={1500}>
                    {(()=>{
                        let blocks = []
                        for(let i = 0; i < this.props.value.length; i++){
                            blocks.push(<rect x={i*100} y={0} width={100} height={100} rx={0} ry={0} fill="none" stroke="#ff0000"></rect>)
                            blocks.push(<path d={"M" + 100*i + "," +"0L" + 100*(i+1) + ",100"}></path>)
                            blocks.push(<path d={"M" + 100*i + "," + "50L" + 100*(i+1) + ",50"} ></path>)
                            blocks.push(<path d={"M" + 100*(i+1) + "," + "0L" + i*100 + ",100"} ></path>)
                            blocks.push(<path d={"M" + 50*(i+1) + "," + "0L" + 50*(i+1) + ",100"}></path>)
                            blocks.push(
                                <text x={50 + i*100} y={47}>
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


// 网格
class Matter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }
    changeEvent(value){
        this.setState({
            content: value
        })
    }
    render(){
        let ct = 12;
        let n = Math.ceil(this.state.content.length / ct);
        console.log(n)
        return(
            <div>
                {(()=>{
                    let t = []
                    for(let i = 0; i < n; i++){
                        t.push(<Rows value={this.state.content.slice(ct*i, ct*(i+1))} key={i}/>)
                    }
                    return t;
                })()}
                <textarea
                    onChange={
                        (e) => this.changeEvent(e.target.value)
                    }
                />
            </div>
        )
    }
}



class App extends React.Component{
    render() {
        return(
            <div>
                <h1 id={'title'}>书法字帖生成</h1>
                <Matter/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
