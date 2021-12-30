// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
// import { Button, Label, Icon } from 'semantic-ui-react';

// import MyPopup from '../util/MyPopup';

// function FollowButton({ user, post: { id, followCount, follow} }) {
//   const [followed, setFollowed] = useState(false);

//   // useEffect(() => {
//   //   if (user && follow.find((follows)=> follows.username === user.username)) {
//   //     setFollowed(true);
//   //   } else setFollowed(false);
//   // }, [user, follow]);

//   const [FollowPost] = useMutation(Follow_POST_MUTATION, {         
//     variables: { userId: id }
//   });

//   const followButton = user ? (
//     followed ? (
//       <Button color="green">
//         <Icon name="male" />
//       </Button>
//     ) : (
//       <Button color="green" basic>
//         <Icon name="male" />
//       </Button>
//     )
//   ) : (
//     <Button as={Link} to="/login" color="teal" basic>
//       <Icon name="male" />
//     </Button>
//   );

//   return (
//     <Button as="div" labelPosition="right" onClick={FollowPost}>
//       <MyPopup content={followed ? 'Unfollow' : 'Follow'}>{followButton}</MyPopup>
//       <Label basic color="green" pointing="left">
//         {followCount}
//       </Label>
//     </Button>
//   );
// }

// const Follow_POST_MUTATION = gql`
//   mutation FollowPost($postId: ID!) {
//     followPost(postId: $postId) {
//       id
//       follow {
//         id
//         username
//       }
//       followCount
//     }
//   }
// `;

// export default FollowButton;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function FollowButton({ user, post: { id, followCount, follow } }) {
  const [followed, setFollowed] = useState(false);

  // useEffect(() => {
  //   if (user && follow.find((follows) => follows.username === user.username)) {
  //     setFollowed(true);
  //   } else setFollowed(false);
  // }, [user, follow]);

  const [followPost] = useMutation(FOLLOW_POST_MUTATION, {
    variables: { postId: id }
  });

  const followButton = user ? (
    followed ? (
      <Button color="green" floated="right">
        <Icon name="male" />
      </Button>
    ) : (
      <Button color="green" basic>
        <Icon name="male" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="green" basic>
      <Icon name="male" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={followPost}>
      <MyPopup content={followed ? 'Unfollow' : 'Follow'}>{followButton}</MyPopup>
      <Label basic color="green" pointing="left">
        {followCount}
      </Label>
    </Button>
  );
}

const FOLLOW_POST_MUTATION = gql`
  mutation followPost($postId: ID!) {
    followPost(postId: $postId) {
      id
      follow {
        id
        username
      }
      followCount
    }
  }
`;

export default FollowButton;