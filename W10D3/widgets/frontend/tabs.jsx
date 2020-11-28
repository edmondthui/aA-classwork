import React from 'react'

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        // this.handleClick = this.handleClick.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
    }

    selectedTab(idx, e) {
        this.setState({index: idx})
    }

    // handleClick(e) {
    //     alert(e.currentTarget)
    //     alert(this.props.tabs.indexOf(e.currentTarget))
    //     this.setState({index: this.props.tabs.indexOf(e.currentTarget)});
    // }

    renderTabs() {
        let selected;
        if (this.state)
        return this.props.tabs.map( (object, idx) => {
            if (this.state.index === idx) {
                selected = "selected";
            } else {
                selected = ""
            }
            return (
                <ul className={'tab-box '+ selected} key={idx}>
                    <header onClick={this.selectedTab.bind(this, idx)} >
                        <h1 >{object.title}</h1>
                    </header>
                </ul>
            )
        });
    }

    render() {
            return (
                <div className='tab-holder' id='click'>
                    <div className = 'inner-tab-holder'>
                        {this.renderTabs()}
                    </div>
                        <article className="article">
                            <img src={this.props.tabs[this.state.index].content} className='resize'></img>
                        </article>
                </div>
            )
        
    }
}

export default Tabs;