// import React, { useContext, useState } from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import { useMutation } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// import { AuthContext } from '../context/auth';
// import { useForm } from '../util/hooks';

// function Login(props) {
//   const context = useContext(AuthContext);
//   const [errors, setErrors] = useState({});

//   const { onChange, onSubmit, values } = useForm(loginUserCallback, {
//     username: '',
//     password: ''
//   });

//   const [loginUser, { loading }] = useMutation(LOGIN_USER, {
//     update(
//       _,
//       {
//         data: { login: userData }
//       }
//     ) {
//       context.login(userData);
//       props.history.push('/');
//     },
//     onError(err) {
//       setErrors(err.graphQLErrors[0].extensions.exception.errors);
//     },
//     variables: values
//   });

//   function loginUserCallback() {
//     loginUser();
//   }

//   return (
//     <div className="form-container">
//       <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
//         <h1>Let's Chat</h1>
//         <Form.Input
//           label="Username"
//           placeholder="Username.."
//           name="username"
//           type="text"
//           value={values.username}
//           error={errors.username ? true : false}
//           onChange={onChange}
//         />
        
//         <Button onClick="/server.js" type="submit" primary >
//           Click to Chat
//         </Button>
//       </Form>
//       {Object.keys(errors).length > 0 && (
//         <div className="ui error message">
//           <ul className="list">
//             {Object.values(errors).map((value) => (
//               <li key={value}>{value}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// const LOGIN_USER = gql`
//   mutation login($username: String!) {
//     login(username: $username) {
//       id
//       email
//       username
//       createdAt
//       token
//     }
//   }
// `;

// export default Login;

import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'




const ListExampleFloated = () => (
  <List animated verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/lena.png' /> */}
      <List.Content>Coding Blocks Team</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/lindsay.png' /> */}
      <List.Content>Shivani</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/mark.png' /> */}
      <List.Content>Medha</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/molly.png' /> */}
      <List.Content>Kaushike</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/molly.png' /> */}
      <List.Content>Shivam</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/molly.png' /> */}
      <List.Content>Anjali</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <div>
    <Button positive>Chat</Button>
  </div>
      </List.Content>
      {/* <Image avatar src='/images/avatar/small/molly.png' /> */}
      <List.Content>Shikhar</List.Content>
    </List.Item>
     
  </List>
)

export default ListExampleFloated