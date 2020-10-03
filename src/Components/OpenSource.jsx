import React from 'react'
import ProjectDetail from '../HelpfulComponents/ProjectDetail'
import Button from '../HelpfulComponents/Button'
const OpenSource = () => {
    return (
        <div className='container OpenSource' id='opensource'>
            <h1>Open Source Projects</h1>
            <div className='project__list'>
                <ProjectDetail />
                <div className='setButton'>
                    <Button text='See More Projects' link='https://github.com/haris-aqeel'/>
                </div>
            </div>
        </div>
    )
}

export default OpenSource
