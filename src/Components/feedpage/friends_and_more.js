import React from 'react'
import '../profile.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function FriendsAndMore() {
  return (
    <div className = "friends-and-more">
      <div className = "profile-url">
        <Card>
        <Card.Header><b>Profile Url</b></Card.Header>
        <Card.Body>
          <Card.Text>
          https://www.linkedin.com/in/bhuwan-bhandari-a46640234/
          </Card.Text>
          <Button style = {{backgroundColor: 'transparent', border: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
          </Button>
        </Card.Body>
    </Card>
      </div>
      <div className = "profiles-around-school">
        <Card>
        <Card.Header><b>Profiles around school</b></Card.Header>
        <Card.Body >
          <Card.Img class ="small-profile-photo" src="https://hips.hearstapps.com/hmg-prod/images/jaguar-getty-jpg-1567092694.jpg?crop=1xw:0.999755859375xh;center,top&resize=980:*"/>
          <Card.Title style={{ margin:'0px' }}>User Name</Card.Title>
          <Card.Text>
           User's major and year
          </Card.Text>
          <button class="extra-buttons">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
              </svg>
              </span>
            <span class="text">Message</span>
        </button>
        </Card.Body>
      </Card>
      </div>

      <div className = "people-you-may-know">
        <Card>
        <Card.Header><b>People you may know</b></Card.Header>
        <Card.Body >
          <Card.Img class ="small-profile-photo" src="https://hips.hearstapps.com/hmg-prod/images/jaguar-getty-jpg-1567092694.jpg?crop=1xw:0.999755859375xh;center,top&resize=980:*"/>
          <Card.Title style={{ margin:'0px' }}>User Name</Card.Title>
          <Card.Text>
           User's major and year
          </Card.Text>
          <button class="extra-buttons">
            <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
            </svg>
            </span>
            <span class="text">Collab</span>
        </button>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}
