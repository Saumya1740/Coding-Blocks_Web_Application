import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Input } from 'semantic-ui-react'


import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import FollowButton from './FollowButton';
import MyPopup from '../util/MyPopup';

function PostCard({
  post: { body, createdAt, id, username,picture, likeCount, commentCount, likes,follow, followCount }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <Card.Content>
          <Button.Group basic size='small' > 
    <Button icon='upload' 
    content="Choose File"
    labelPosition="left"
    icon="file"
  
    onClick={() => this.fileInputRef.current.click()}/>
  </Button.Group><hr></hr>
  
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        {/* <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} /> */}
      
        <Card.Header>{username}</Card.Header>
        
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
        
      </Card.Content>
      
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
            </Button>
            
            
            
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
      <Card.Description><Input label='http://' placeholder='github' /></Card.Description>
      <Card.Content extra>
      <FollowButton user={user} post={{ id, followCount, follow }} />
        {/* <div className='ui two buttons' >
          <Button basic color='green' floated="right" size="mini">
            Follow
          </Button>
          <Label basic color="green" pointing="left">
              {followCount}
            </Label>
        </div> */}
      </Card.Content>
    </Card>
  );
}

export default PostCard;