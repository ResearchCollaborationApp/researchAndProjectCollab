import React from 'react'
import './autoScroll.css'
import ResearchCard from './researchCard'
function AutoScroll() {
  return (
    <div className = "flex-col  overflow-hidden space-y-0 group">
        <div className="flex-col space-y-0 animate-loop-scroll group-hover:paused">
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
        </div>
        <div className="flex-col space-y-0 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
            <ResearchCard/>
        </div>
    </div>
  )
}

export default AutoScroll
