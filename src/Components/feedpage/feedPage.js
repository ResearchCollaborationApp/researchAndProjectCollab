import React from 'react'
import Navigation from '../navbar/navigation'
import './feedPage.css'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Mainprofile from '../profilepage/mainprofile';
import ScrollingFeed from './scrollingFeed';
export default function FeedPage() {
  return (
    <>
      <Navigation/>
      <div className = " container feed-page">
        <div className = "small-profile-section col">
          <Mainprofile/>
        </div>
        <div className = "scrolling-feed-section col">
         <ScrollingFeed/>
        </div>
        <div className = "top-research-section col me-5">
          <Card>
          <Card.Header><b>Top Research Around School</b></Card.Header>
            <Card.Body>
              {createReasearchCard()}
              {createReasearchCard()}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}
function createReasearchCard(){
  return  <Card style={{ width: '100%', marginBottom: '10px' }}>
            <Card.Img variant="top" src="https://neilpatel.com/wp-content/uploads/2020/11/eye-tracking.jpg" />
            <Card.Body>
              <Card.Title>Eye Tracking Research</Card.Title>
              <Card.Text>
              Eye tracking research delves into how our eyes move and focus to gather insights into cognitive processes, attention, and user interaction with various stimuli.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Who posted?</ListGroup.Item>
              <ListGroup.Item>When posted?</ListGroup.Item>
              <ListGroup.Item>Which major can apply?</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <div style ={{display: 'flex', justifyContent: 'space-around'}}>
              <Card.Link href="#apply" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
              </svg>
              <span className='link-text'>Apply Now</span>
              </Card.Link>
              <Card.Link href="#emailprofessor" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
            </svg>
            <span className = 'link-text'>Email Professor</span>
              </Card.Link>
              </div>
            </Card.Body>
          </Card>
}
